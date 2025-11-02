const conf = {
  appWriteEndpoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
  appWriteDatabase: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appWriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appWriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appWriteEndpoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
};

export default conf;
// soo whle dealing with config files the  value should be only string
//many error comes
