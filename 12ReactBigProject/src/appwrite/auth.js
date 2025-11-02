import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  Client = new Client();
  account; // idhar account var hai kynki pehle client ke endpoit set karne padege
  constructor() {
    this.Client.setEndpoint(conf.appWriteEndpoint).setProject(
      conf.appWriteProjectId
    );
    this.account = new Account(this.Client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
        //direct login if account created
        return this.login({ email, password });
      } else {
        return userAccount; // value may be null or undefined
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("AppWrite service :: getCurrentUser::error", error);
    }
    // we can use if else in try catch to exactly check if user is there or not
    // insted we will do
    return null;
  }
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Logout error in auth:", error);
    }
  }
}

const authService = new AuthService();

export default authService;
