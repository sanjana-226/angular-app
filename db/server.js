// const { MongoClient } = require("mongodb");

// const uri =
//   "mongodb+srv://myAtlasDBUser:pwd@atlascluster.kydmpyp.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     await client.connect();
//     const db = client.db("sample_mflix");
//     const collection = db.collection("test");
//     // Find the first document in the collection
//     const first = await collection.findOne();
//     console.log(first);
//   } finally {
//     // Close the database connection when finished or an error occurs
//     await client.close();
//   }
// }
// run().catch(console.error);

const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
// MongoDB Atlas Connection String
const uri =
  "mongodb+srv://myAtlasDBUser:pwd@atlascluster.kydmpyp.mongodb.net/sample_mflix";
// const uri =
  // "mongodb+srv://myAtlasDBUser:pwd@atlascluster.kydmpyp.mongodb.net/?retryWrites=true&w=majority";

async function getMoviesFromDatabase() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    const db = client.db("sample_mflix");
    const collection = db.collection("test");
    return await collection.find({}).toArray();
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  } finally {
    client.close();
  }
}

app.get("/", async (req, res) => {
  try {
    const movies = await getMoviesFromDatabase();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Error fetching movies" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
