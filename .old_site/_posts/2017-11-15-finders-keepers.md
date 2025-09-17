---
Layout: Post
Title: "finders keepers"
Date: 2017-11-15 
Categories:
---

# finders keepers intro 
Create a function that looks through an array (first argument)
and returns the first element in the array that passes
a truth test (second argument).```
```
function findElement(arr, func) {
  var num = 0;
  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
`
# solution
This challenge was not easy per say because i managed to solve it with 
only one line of code.
```
function findElement(arr, func){
  return arr.filter(func)[0];}
findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });
```
so all this function does is it returns the given array 
as an argument filtered down with the second argument, 
which is a function that returns items that leave no remainder when 
multiplied by 2.After filtering them out those it returns the first one 
at index zero. 