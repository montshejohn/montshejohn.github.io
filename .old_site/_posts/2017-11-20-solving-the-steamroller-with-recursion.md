---
Layout: Post
Title: "solving the steamroller challange with recursion"
Date: 2017-11-20
Catcategories:
---

# Steam roller challenge solved using recursion 

It took quite some time to understand it and figure how it works.

Recursion is the technique for iterating by having a function call itself repeatedly until it

arrives at a desired result.

```Recursion is best applied when you need to call the same function repeatedly with different parameters from within a loop.
While it can be used in many situations, it is most effective for solving problems involving iterative branching, such as fractal math,
sorting, or traversing the nodes of complex or non-linear data structures.```

With the help of a mentor I managed to solve the steam roller challenge which required this

#Flatten a nested array. You must account for varying levels of nesting.
below is the algo that solves this challenge

function steamroll Ar ray(arr) {
if (Array.isArray(arr)) {
return arr.reduce((accum, arr) =>  {
return accum.concat(steamrollArray(arr));
}, []);
} else {
return arr;
}
}
steamrollArray([1, {}, 3, [[4]]]);

So first we have a function called steamrollArray that takes one perimeter named array 

inside the function we have an if statement that checks if the perimeter is an array 

if it is we return  a reduce function that we will use to flatten the array to one single array 

the reduce function returns the accumulator concatenated with the recursive function that will repeat it self until there is no array element in ARR which is our perimeter and when the element in arr is not array it adds return it to arr this goes on and on until the required result is met.

URL = https://www.sitepoint.com/recursion-functional-JavaScript/



