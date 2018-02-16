---
Layout: Post
Title: "make a person "
Date: 2018-01-19
Categories:
---
# Objective 

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

## Code snippets
```
var Person = function(firstAndLast) {
    //Complete the method below getFirstName() 
  var firstName="";
  var lastName = "";
  var fullNames = "";
  var generate = function(names){
   names = names.split(" ");
   firstName=names[0];
   lastName = names[1];
   fullNames = firstName + " " + lastName;
    
  };
  generate(firstAndLast);
  this.getFirstName =function()
  {return firstName;};
  
  this.getLastName =function()
  {return lastName; };
  
  this.getFullName =function(){return firstName + " " + lastName
  ;};
  
  this.setFirstName=function(first){
   firstName = first;
  return firstName;};
  
  this.setLastName=function(last){
   lastName = last;
  return lastName;};
  
  this.setFullName =function(fullName){
    fullNames = generate(fullName);
    return fullNames;};

    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
```
### Explanation
for this challenge we need to use closures 
cite:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
to be cont...