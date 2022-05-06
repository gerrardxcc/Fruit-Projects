const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb://localhost:27017";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    console.log("Connected Successfully to server");
    const database = client.db('fruitsDB');
    const fruitsCollection = database.collection('fruits');

    const docs = [
      { name: "Apple", score:8 , review: "Great fruit"},
      { name: "Orange", score:6 , review: "Kinda sour"},
      { name: "Peach", score:9 , review: "Great stuff!"}
    ];
    const insertManyresult = await fruitsCollection.insertMany(docs);
    let ids = insertManyresult.insertedIds;
    console.log(`${insertManyresult.insertedCount} documents were inserted.`);
    for (let id of Object.values(ids)) {
       console.log(`Inserted a document with id ${id}`);
     }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

  const findResult = await fruits.find({
  name: "Lemony Snicket",
  date: {
    $gte: new Date(new Date().setHours(00, 00, 00)),
    $lt: new Date(new Date().setHours(23, 59, 59)),
  },
});
}
run().catch(console.dir);
