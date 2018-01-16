---
Layout: Post
Title: "record collection"
Date: 2017-12-04 
Categories:
---
# Record collection
this task was a bit confusing for me at first maybe it was because of how i just skipped on to the task without reading to understand
the instructions i can't believe its still a habit to this day here is what we were required to do 

```You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.
Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.
If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.
Your function must always return the entire collection object.
There are several rules for handling incomplete data:
If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.
If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.
If value is empty (""), delete the given prop property from the album.```
first of all we have a function with three perimeters id property and value
and inside that function we have multiple condigna statements 
the first one checks if the property in our object is equal to tracks and also check if the value is not an empty string
if all conditions are true the provided property at the provided id will be re assigned to the given value(args);
then we have another conditional statement that checks if the props is  in our object is tracks and it does not have 
tracks property and if the conditions are true we assign he provided property at the provided id will be re assigned to an empty array
we then come back again to check if prop is still track if it is we create  a variable that has the empty array we defined above and push and push 
value to the empty array
the last if statement check if the values is an empty string and if it 
we then delete  the provided props at the provided id(args) the code snippet looks like this
```
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
//var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  
  if(prop !== 'tracks' && value !== "") {
    collection[id][prop] = value;
  }
  
  if(prop === 'tracks' && collection[id][prop] === undefined) {
    collection[id][prop] = [];
  }
  
  if(prop === 'tracks') {
    var trck = collection[id][prop];
    trck.push(value);
  }
  
  if(value === "") {
    delete collection[id][prop];
  }
  
  //console.log(collection)
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");```





 