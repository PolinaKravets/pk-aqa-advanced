
import axios from 'axios';


const axiosInstance = axios.create({baseURL: 'https://api.restful-api.dev', validateStatus: () => true});

const getObject = await axiosInstance.get(`/objects/12345678`);
console.log(getObject.status);

const getAllObjects = await axiosInstance.get(`/objects`);
console.log(getAllObjects.data);

const addObject = await axiosInstance.post('/objects',{name: "iPhone 11",data: {'year': 2018,'price': 399.0,'CPU model': "Intel Core i9",'Hard disk size': "256 MB"}});
console.log(addObject.data);
const id = addObject.data.id;

const putObject = await axiosInstance.put('/objects/1234567',{name: "iPhone 11",data: {'year': 2018,'price': 399.0,'CPU model': "Intel Core i9",'Hard disk size': "256 MB"}});
console.log(putObject.status);


const delObject = await axiosInstance.delete(`/objects/123`);
console.log(delObject.status);
console.log(delObject.data);


const patchObject = await axiosInstance.patch(`/objects/123`, {
    name: 'Apple MacBook Pro 16 (Updated Name)'
 });
console.log(patchObject.status);
console.log(patchObject.data.error);