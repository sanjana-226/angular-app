//server.js
const { MongoClient } = require("mongodb");

const connectionString =
  "mongodb+srv://myAtlasDBUser:pwd@atlascluster.kydmpyp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
}

connectToMongoDB();

async function insertDocuments(collectionName, documents) {
  try {
    const db = client.db("sample_mflix"); // Replace with your actual database name
    const collection = db.collection(collectionName);
    const result = await collection.insertMany(documents);
    console.log("Inserted documents:", result.insertedCount);
  } catch (error) {
    console.error("Error inserting documents:", error);
  }
}

// Example usage
//   insertDocuments('users', [
//     { name: 'John', age: 30 },
//     { name: 'Jane', age: 25 },
//   ]);
