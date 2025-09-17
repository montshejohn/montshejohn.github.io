---
Layout: Post
Title:  "smalles common multiple "
Date:   2017-11-13 10:34:25 +0200
Categories: 
---
# intro Smallest common multiple challenge
Coming to the conclusion to the solution of this challenge 
took quite some time but thanks to my fellow students and 
mentor's i was able to come to a conclusion that works was satisfying
here is what i was supposed to do 

```
Find the smallest common multiple of the provided parameters that can be 
evenly divided by both, as well as by all sequential numbers in the range
between these parameters.
The range will be an array of two numbers that will not necessarily be in
numerical order.
e.. For 1 and 3 - find the smallest common multiple of both 1 and 3 
that is evenly divisible by all numbers between 1 and 3.
```
## the attempt 

what is a multiple of a number? 
We get a multiple of a number when we multiply it by another number. 
Such as multiplying by 1, 2, 3, 4, 5, etc, but not zero.
Just like the multiplication table.
ok so i get the smallest multiple of each provided number then 
return that piece of cake.
 
After an hour in the task i then realized 
that this challenge was actually a little bit harder than i thought. 
plan B ```pair programme``` this should make  it easier, two or more minds 
combined are more powerful. 
here is what we came up with :

```function smallestCommons(arr) {
  function checkIfMultiple(cm, min, max) {
    for (var i = min; i < max; i++) {
      if (cm % i !== 0) {
        return false;
      }
    }
    return true;
  }
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var currentMultiple = max;
  while (!checkIfMultiple(currentMultiple, min, max)) {
    currentMultiple += max;
  }
  return currentMultiple;
}
console.log(smallestCommons([23,18]));
```
##Take home 
what i learned from this challenge is that 
when and where to use a for loop 
how to use helper functions and of course getting the
smallest common multiple of a number.
