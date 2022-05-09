const mongoose = require('mongoose');

// connect to MongoDB by specifying port to access MongoDB server
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/fruitsDB');
}

// creates new Database if not exist named fruitsDB.
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});
// Creates new collection named Fruits.it pluralize the collection name Fruit to Fruits. and pass the schema.

const Fruit = mongoose.model('Fruit', fruitSchema);

// Insert data to Fruits collection.
const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit"
});

// fruit.save();

//creating new collection People
const personSchema = mongoose.Schema({
  name:String,
  age:Number
});

const Person = mongoose.model('Person', personSchema);
const person = new Person({
  name: "John",
  age: 37
});

person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score:10,
  review:"The best fruit!"
});

const orange = new Fruit({
  name: "Orange",
  score: 4,
  review:"Too sour for me"
});

const watermelon = new Fruit({
  name: "Watermelon",
  score: 10,
  review:"The best fruit ever!"
});

Fruit.insertMany([kiwi,orange,watermelon],function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Successfully saved all the fruits to fruitsDB");
  }
});
