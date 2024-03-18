import conf from "../conf/conf";
import {Client,ID,Query,Databases,Storage} from "appwrite"

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectID)
        this.databases= new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status,userId}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )

        } catch (error) {
            console.log("Appwrite service ::  createPost :: error ",error)
        }
    }

    async updatePost(slug,{title,content,featuredImage,status,}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )

        } catch (error) {
            console.log("Appwrite service :: updateDocument :: error ",error)
        }
    }
    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
            )
            return true;

        } catch (error) {
            console.log("Appwrite service :: updateDocument :: error ",error)
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseID,conf.appwriteCollectionID,slug);
        } catch (error) {
            console.log("Appwrite :: getPost :: error ",error)
        }
    }

    async getPosts(queries = [Query.equal( "status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                queries,
                );

        } catch (error) {
            console.log("Appwrite :: getPosts ::  error ",error)
            return false
        }
    }
    
    //Upload file  services
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite :: uploadFile :: error ",error)
            return false
        }
    }
    

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketID,
                ID.unique(),
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite :: uploadFile :: error ",error)
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketID,
            fileId
        )
    }
}


const service = new Service();
export default service