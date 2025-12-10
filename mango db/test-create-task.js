const axios = require('axios');

async function testCreateTask() {
  try {
    const taskData = {
      name: "Test Task",
      age: 25,
      priority: "medium"
    };
    
    console.log('Sending task data:', taskData);
    
    const response = await axios.post('http://localhost:3000/tasks', taskData);
    console.log('Task created successfully:', response.data);
  } catch (error) {
    console.error('Error creating task:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    } else {
      console.error('Message:', error.message);
    }
  }
}

testCreateTask();