const mongoose = require('mongoose');
require('dotenv').config();

async function testConnection() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp');
    console.log('Successfully connected to MongoDB');
    
    // Get connection state
    console.log('Connection state:', mongoose.connection.readyState);
    
    // Close connection
    await mongoose.connection.close();
    console.log('Connection closed');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

testConnection();