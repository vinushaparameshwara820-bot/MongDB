const axios = require('axios');

const baseURL = 'http://localhost:3000/users';

async function testCRUD() {
  try {
    console.log('Testing CRUD operations...\n');

    // CREATE - POST
    console.log('1. Creating a new user...');
    const newUser = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 30
    };
    
    const createResponse = await axios.post(baseURL, newUser);
    const createdUser = createResponse.data;
    console.log('Created user:', createdUser);
    
    // READ - GET all users
    console.log('\n2. Getting all users...');
    const getAllResponse = await axios.get(baseURL);
    console.log('All users:', getAllResponse.data);
    
    // READ - GET specific user
    console.log('\n3. Getting specific user...');
    const getOneResponse = await axios.get(`${baseURL}/${createdUser._id}`);
    console.log('Specific user:', getOneResponse.data);
    
    // UPDATE - PATCH
    console.log('\n4. Updating user...');
    const updateData = { age: 31 };
    const updateResponse = await axios.patch(`${baseURL}/${createdUser._id}`, updateData);
    console.log('Updated user:', updateResponse.data);
    
    // DELETE - DELETE
    console.log('\n5. Deleting user...');
    const deleteResponse = await axios.delete(`${baseURL}/${createdUser._id}`);
    console.log('Deleted user:', deleteResponse.data);
    
    console.log('\nAll CRUD operations completed successfully!');
  } catch (error) {
    console.error('Error during CRUD operations:', error.message);
  }
}

testCRUD();