
import RestClient from './restClient';

export default class Object extends RestClient{
    constructor(){
        super('https://api.restful-api.dev');
        this.url = '/objects';
        this.createdObjectIds = [];
    }

// Get all obects 
async getAllObjects() {
    return this.sendGet({url: `${this.url}`});
  }   
// Get single object
async getSingleObject(objectId) {
    return this.sendGet({url: `${this.url}/${objectId}`});
  }  
// Create object 
async createObject(data) {
    const resp = await this.sendPost({url: `${this.url}`, data});
    if(resp.status === 200) {
      this.createdObjectIds.push({objectId: resp.data.id});
    }
    return resp;
  }
// Update object
async updateObject(objectId,data) {
    return this.sendPut({url: `${this.url}/${objectId}`, data});
  }
// Partially update object
async partUpdateObject(objectId,data) {
    return this.sendPatch({url: `${this.url}/${objectId}`, data});
  }
// Delete object
async deleteObject(objectId) {
    return this.sendDelete({url: `${this.url}/${objectId}`});
  } 
  /// cleanUp
  async cleanUp() {
    for await(const {objectId} of this.createdObjectIds){
      await this.deleteObject(objectId);
    }
  }
}