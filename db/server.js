const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());

const uri =
  "mongodb+srv://myAtlasDBUser:pwd@atlascluster.kydmpyp.mongodb.net/sample_mflix";

async function getMoviesFromDatabase() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    const db = client.db("sample_mflix");
    const collection = db.collection("movies");
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
    console.log("app.get");
  } catch (error) {
    res.status(500).json({ error: "Error fetching movies" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
