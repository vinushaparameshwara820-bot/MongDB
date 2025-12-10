const axios = require('axios');

const baseURL = 'http://localhost:3000/tasks';

async function testTaskCRUD() {
  try {
    console.log('Testing Task CRUD operations...\n');

    // CREATE - POST
    console.log('1. Creating a new task...');
    const newTask = {
      title: 'Complete project proposal',
      description: 'Finish the MongoDB CRUD application proposal',
      priority: 'high',
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // Due in 7 days
    };
    
    const createResponse = await axios.post(baseURL, newTask);
    const createdTask = createResponse.data;
    console.log('Created task:', createdTask);
    
    // CREATE another task
    console.log('\n2. Creating another task...');
    const anotherTask = {
      title: 'Review code',
      description: 'Review the MongoDB integration code',
      priority: 'medium',
      completed: true
    };
    
    const createResponse2 = await axios.post(baseURL, anotherTask);
    const createdTask2 = createResponse2.data;
    console.log('Created task:', createdTask2);
    
    // READ - GET all tasks
    console.log('\n3. Getting all tasks...');
    const getAllResponse = await axios.get(baseURL);
    console.log(`Found ${getAllResponse.data.length} tasks`);
    
    // READ - GET tasks with filters
    console.log('\n4. Getting completed tasks...');
    const getCompletedResponse = await axios.get(`${baseURL}?completed=true`);
    console.log(`Found ${getCompletedResponse.data.length} completed tasks`);
    
    console.log('\n5. Getting high priority tasks...');
    const getHighPriorityResponse = await axios.get(`${baseURL}?priority=high`);
    console.log(`Found ${getHighPriorityResponse.data.length} high priority tasks`);
    
    // READ - GET specific task
    console.log('\n6. Getting specific task...');
    const getOneResponse = await axios.get(`${baseURL}/${createdTask._id}`);
    console.log('Specific task:', getOneResponse.data);
    
    // UPDATE - PATCH
    console.log('\n7. Updating task...');
    const updateData = { completed: true, priority: 'low' };
    const updateResponse = await axios.patch(`${baseURL}/${createdTask._id}`, updateData);
    console.log('Updated task:', updateResponse.data);
    
    // DELETE - DELETE
    console.log('\n8. Deleting task...');
    const deleteResponse = await axios.delete(`${baseURL}/${createdTask._id}`);
    console.log('Deleted task:', deleteResponse.data);
    
    console.log('\nAll Task CRUD operations completed successfully!');
  } catch (error) {
    console.error('Error during Task CRUD operations:', error.message);
  }
}

testTaskCRUD();