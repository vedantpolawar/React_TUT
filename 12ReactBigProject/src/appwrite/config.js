import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteEndpoint)
      .setProject(conf.appWriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // 🟢 CREATE
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug, // or use ID.unique()
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  // 🟡 UPDATE
  async updatePost({ slug, title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
    }
  }

  // 🔴 DELETE
  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: deletePost :: error", error);
    }
  }

  // 🔍 GET SINGLE POST
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appWriteDatabaseId, // ✅ fixed (was conf.appWriteDatabase)
        conf.appWriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error);
      return false;
    }
  }

  // 📜 GET ALL POSTS
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appWriteDatabaseId, // ✅ fixed (was missing)
        conf.appWriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error", error);
      return false;
    }
  }

  // 📁 UPLOAD FILE (featured image)
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appWriteBucketId, // Make sure to define this in conf.js
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
    }
  }

  // 🧹 DELETE FILE
  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(conf.appWriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
    }
  }

  // 🌐 GET FILE PREVIEW URL
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appWriteBucketId, fileId);
  }
}
