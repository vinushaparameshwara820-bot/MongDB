const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/vinusha')
  .then(() => {
    console.log('Successfully connected to MongoDB');
    
    // Test connection by listing collections
    mongoose.connection.db.listCollections().toArray((err, collections) => {
      if (err) {
        console.error('Error listing collections:', err);
      } else {
        console.log('Available collections:', collections.map(c => c.name));
      }
      
      // Close connection
      mongoose.connection.close();
      console.log('Connection closed');
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });