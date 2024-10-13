import Object  from '../apiClient/objects.js';
let objectApi;
let objectId;
let createObjectPayload;
let updateObjectPayload;


describe('Object tests', () => {
  beforeAll(async() => {
    objectApi = new Object();
    createObjectPayload = {
      name: 'Apple MacBook Pro 16',
      data: {
         year: 2019,
         price: 1849.99,
         'CPU model': 'Intel Core i9',
         'Hard disk size': '1 TB'
      }
   };
    const response = await objectApi.createObject(createObjectPayload);
    expect(response.status).toEqual(200);
    expect(response.data.id).toBeDefined();
    expect(response.data.name).toEqual(createObjectPayload.name);
    expect(response.data.data.year).toEqual(createObjectPayload.data.year);
    expect(response.data.data.price).toEqual(createObjectPayload.data.price);
    objectId = response.data.id;
  });
  afterAll(async() => {
    await objectApi.cleanUp();
  });


test('GET All Objects', async() => {
  const response = await objectApi.getAllObjects();
  expect(response.status).toBe(200);
  expect(response.data).toBeDefined();
});


test('GET one Object', async() => {
    const response = await objectApi.getSingleObject(objectId);
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data.name).toEqual(createObjectPayload.name);
    expect(response.data.data.year).toEqual(createObjectPayload.data.year);
    expect(response.data.data.price).toEqual(createObjectPayload.data.price);
});

test('GET invalid object', async()=> {
  const response = await objectApi.getSingleObject('1234567890');
  expect(response.status).toBe(404);
  expect(response.data.error).toBe('Oject with id=1234567890 was not found.');

}

);

test('Update Object', async() => {
  let updateObjectPayload = {
    name: 'Apple MacBook Pro 17',
    data: {
       year: 2020,
       price: 1999.99,
       'CPU model': 'Intel Core i9',
       'Hard disk size': '2 TB'
    }
  };
  const response = await objectApi.updateObject(objectId,updateObjectPayload);  
  expect(response.status).toEqual(200);
  expect(response.data.id).toBeDefined();
  expect(response.data.name).toEqual(updateObjectPayload.name);
  expect(response.data.data.year).toEqual(updateObjectPayload.data.year);
  expect(response.data.data.price).toEqual(updateObjectPayload.data.price);
  expect(response.data.updatedAt).toBeDefined();
});

test('Update invalid Object', async() => {
  updateObjectPayload = {
    name: 'Apple MacBook Pro 17',
    data: {
       year: 2020,
       price: 1999.99,
       'CPU model': 'Intel Core i9',
       'Hard disk size': '2 TB'
    }
  };
  
  const response = await objectApi.updateObject('1234567890', updateObjectPayload);  
  expect(response.status).toEqual(404);
  expect(response.data.error).toEqual('The Object with id = 1234567890 doesn\'t exist. Please provide an object id which exists or generate a new Object using POST request and capture the id of it to use it as part of PUT request after that.');
});

test('Partially update Object', async() => {
  
  const response = await objectApi.partUpdateObject(objectId,{name: 'Apple MacBook Pro 16 (Updated Name)'});  
  expect(response.status).toEqual(200);
  expect(response.data.id).toBeDefined();
  expect(response.data.name).toEqual('Apple MacBook Pro 16 (Updated Name)');
  expect(response.data.updatedAt).toBeDefined();
});

test('Partially update invalid Object', async() => {
  
  const response = await objectApi.partUpdateObject('1234567890',{name: 'Apple MacBook Pro 16 (Updated Name)'});  
  expect(response.status).toEqual(404);
  expect(response.data.error).toEqual('The Object with id = 1234567890 doesn\'t exist. Please provide an object id which exists or generate a new Object using POST request and capture the id of it to use it as part of PATCH request after that.');
});

test('DELETE Object', async() => {
    const response = await objectApi.deleteObject(objectId);
    expect(response.status).toBe(200);
    expect(response.data.message).toContain(`Object with id = ${objectId} has been deleted`);
  });
  
test('DELETE invalid Object', async() => {
    const response = await objectApi.deleteObject('1234567890');   
    expect(response.status).toBe(404);
    expect(response.data.error).toContain(`Object with id = 1234567890 doesn't exist.`);
  });
}
);