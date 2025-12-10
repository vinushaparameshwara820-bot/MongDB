const axios = require('axios');

async function testCreateFrontendTask() {
  try {
    const taskData = {
      title: "Test Frontend Task",
      description: "This is a test task from frontend",
      priority: "high",
      dueDate: "2025-12-01"
    };

    console.log('Sending frontend task data:', taskData);

    const response = await axios.post('http://localhost:3000/tasks', taskData);
    console.log('Frontend task created successfully:', response.data);
  } catch (error) {
    console.error('Error creating frontend task:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    } else {
      console.error('Message:', error.message);
    }
  }
}

testCreateFrontendTask();
