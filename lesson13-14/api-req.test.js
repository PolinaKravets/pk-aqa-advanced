import axios from 'axios';


const baseUrl = 'https://api.restful-api.dev';
let id;

test('GET All Objects', async() => {
  const response = await axios.get(`${baseUrl}/objects`);
  expect(response.status).toBe(200);
  expect(response.data).toBeDefined();
});



test('POST Object', async() => {
  const response = await axios.post(`${baseUrl}/objects`,
    {name: "iPhone 11",data: {year: 2018,price: 399.99,'CPU model': "Intel Core i9",'Hard disk size': "256 MB"}});
  id = response.data.id;  
  expect(response.status).toBe(200);
  expect(response.data).toBeDefined();
});

test('GET one Object', async() => {
    const response = await axios.get(`${baseUrl}/objects/${id}`); 
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data.name).toContain('iPhone 11');
    expect(response.data.data.year).toEqual(2018);
    expect(response.data.data.price).toEqual(399.99);
  });


test('PUT  Object', async() => {
  const response = await axios.put(`${baseUrl}/objects/${id}`,
    {name: "iPhone 11",data: {year: 2020,price: 499.99,'CPU model': "Intel Core i9",'Hard disk size': "256 MB"}});
      
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data.data.year).toEqual(2020);
    expect(response.data.data.price).toEqual(499.99);
});

test('DELETE Object', async() => {
    const response = await axios.delete(`${baseUrl}/objects/${id}`);   
    expect(response.status).toBe(200);
    expect(response.data.message).toContain(`Object with id = ${id} has been deleted`);
  });
  
test('DELETE null Object', async() => {
    const response = await axios.delete(`${baseUrl}/objects/${id}`, {validateStatus: () => true});   
    expect(response.status).toBe(404);
    expect(response.data.error).toContain(`Object with id = ${id} doesn't exist.`);
  });