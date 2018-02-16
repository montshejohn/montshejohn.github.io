---
Layout: Post
Title:  "sum all primes post solution"
Date:   2017-11-14 15:46:12 +0200
Categories: 
---
# Sum all primes solution

So the solution to the Sum all primer was a little bit difficult 
to come up with, it took me almost  10hours in total to do this 
challenge but thanks to read-ask-search i got a hint on how i can solve
this problem.
And this is how i did it :
## code snippet 1 

function sumPrimes(num) {
  var empty = [];
  for (var i = 2; i <= num; i++) {
    empty.push(i);
  }
here we have our first function sum primes I 
used this function to get numbers from 2 up to 
the given number and stored them into an empty array i 
declared on top.
 ## code snippet two
  

  function filterred(item, index, array) {
    for (var j = 0; j < index; j++) {
      if (item % array[j] === 0) {
        return false;
      }
    }
    return true;
  }
here we have the second function the helper function called 
filterred (should work on my naming ) so the above function 
is the one we are using to filter out falsy items from our 
array so it basically checks for each item in the array if 
its divisible by next item and the remainder is zero
## last code snippet 

  return empty.filter(filterred).reduce(function reduced(a, b) {
    return a + b;
  });
}
so last but no least we filter the array called empty that now has numbers from 
2 to the given number in this case its 977 we filter out the falsie items using 
our above function then we reduce the items to one with our reduce function 
then return it done
