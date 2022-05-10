const mongoose = require('mongoose');

// connect to MongoDB by specifying port to access MongoDB server
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/fruitsDB');

// creates new Database if not exist named fruitsDB.
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Fruits has a name."]
  },
  rating: {
    type: Number,
    min: 1,
    max:10
  },
  review: String
});
// Creates new collection named Fruits.it pluralize the collection name Fruit to Fruits. and pass the schema.

const Fruit = mongoose.model('Fruit', fruitSchema);

// Insert data to Fruits collection.
// const fruit = new Fruit({
//   name: "Watermelon",
//   rating: 10,
//   review: "Best fruit ever!."
// });
//
// await fruit.save();

//creating new collection People
const personSchema = mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model('Person', personSchema);

const pear = new Fruit({
  name: "Pear",
  score: 10,
  review: "Tasty fruit."
});

pear.save();

Person.updateOne({name:"John"}, {favouriteFruit: pear}, function(err){
  if(err){
    console.log(err);
  } else {
    console.log("Successfully updated the document");
  }
});

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// });
//
// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit!"
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   score: 4,
//   review: "Too sour for me"
// });
//
// const watermelon = new Fruit({
//   name: "Watermelon",
//   score: 10,
//   review: "The best fruit ever!"
// });

// Fruit.insertMany([kiwi, orange, watermelon], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // mongoose.connection.close();
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});

//  Fruit.updateOne({_id:"62792f908962421c5821d4be"},{name:"Peach"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully updated the document.");
//   }
// });

// Fruit.deleteOne({_id: "62792e715e5da2727f263b1e"}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Successfully delete the document.");
//   }
// });

// Person.deleteMany({name:"John"}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Successfully delete the documents.");
//   }
// });

}
