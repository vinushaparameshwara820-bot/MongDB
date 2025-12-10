const { MongoClient } = require('mongodb');

async function renameDatabase() {
  try {
    // Connect to MongoDB
    const client = new MongoClient('mongodb://localhost:27017');
    await client.connect();
    console.log('Connected to MongoDB');
    
    // Get source and target database references
    const sourceDb = client.db('myapp');
    const targetDb = client.db('vinusha');
    
    // Get collections from source database
    const collections = await sourceDb.listCollections().toArray();
    console.log('Found collections:', collections.map(c => c.name));
    
    // Copy each collection
    for (const collectionInfo of collections) {
      const collectionName = collectionInfo.name;
      console.log(`Processing collection: ${collectionName}`);
      
      // Get all documents from source collection
      const documents = await sourceDb.collection(collectionName).find({}).toArray();
      
      if (documents.length > 0) {
        // Insert documents into target collection
        await targetDb.collection(collectionName).insertMany(documents);
        console.log(`Copied ${documents.length} documents to ${collectionName} in vinusha database`);
      } else {
        console.log(`No documents found in ${collectionName}`);
      }
    }
    
    // Close connection
    await client.close();
    
    console.log('Database rename completed successfully!');
    console.log('The data has been copied from "myapp" to "vinusha" database.');
    console.log('You can now update your .env file to use MONGODB_URI=mongodb://localhost:27017/vinusha');
    
  } catch (error) {
    console.error('Error renaming database:', error);
  }
}

renameDatabase();