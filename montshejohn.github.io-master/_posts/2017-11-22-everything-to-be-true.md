---
Layout: Post
Title: "Everything to be true"
Date: 2017-11-21 
Categories:
---
# Everything to be true 
intermditiate algorythmn scripting challange
checks if the element described in the second 
argument is present every collection 


## Required
Check if the predicate (second argument) is truthy on all 
elements of a collection (first argument).


## Solution to the challenge

function truthCheck(collection, pre) {
  for(var i = 0; i<collection.length;i++){
    if(!collection[i][pre]){
return false;
}
}
  // Is everyone being true?
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
should return true
## Code explanation
we have a function called truthCheck that takes 
two perimeters collection and pre.
Inside the function we have a for loop that,we use 
to iterate through the collection and check 
using an (if statement) if 
the element in that position has the presence of the element in the second argument. 