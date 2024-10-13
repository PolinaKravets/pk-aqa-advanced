import axios from 'axios';

export default class RestClient {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
      this.axiosInstance = axios.create({baseURL: this.baseUrl, validateStatus: () => true});
    }
    async sendPost({url, headers, params, data, additionalConfigs}) {
        return this.#sendRequest({url, headers, params, data, additionalConfigs, method: 'POST'});
      }
      async sendGet({url, headers, params, additionalConfigs}) {
        return this.#sendRequest({url, headers, params, additionalConfigs, method: 'GET'});
      }
      async sendPut({url, headers, params, data, additionalConfigs}) {
        return this.#sendRequest({url, headers, params, data, additionalConfigs, method: 'PUT'});
      }
      async sendPatch({url, headers, params, data, additionalConfigs}) {
        return this.#sendRequest({url, headers, params, data, additionalConfigs, method: 'PATCH'});
      }
      async sendDelete({url, headers, params, additionalConfigs}) {
        return this.#sendRequest({url, headers, params, additionalConfigs, method: 'DELETE'});
      }
    
      async #sendRequest({url, method, headers, params, data, additionalConfigs}) {
        try {
          return this.axiosInstance.request({url, method, headers, params, data, ...additionalConfigs});
        } catch (err) {
          throw new Error(`Error occured on request to ${this.baseUrl}${this.url}. Error stack: ${err.stack}`);
        }
      }
    }