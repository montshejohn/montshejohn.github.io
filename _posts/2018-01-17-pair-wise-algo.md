---

Layout: Post

Title: "Pair wise algorithm "

Date: 2018-01-17 

Categories:

---

# Objective

```

Given an array ARR, find element pairs whose sum equal 

the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements 

but different indices, return the smallest sum of indices. Once an 

element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. 

The pairs that sum to 20 are [7, 13] and [9, 11].

We can then write out the array with their indices and values.

```

## How can it be done 

For this challenge you can use a reduce function or you 

can use for loops and if statements to check each  number in the first 

argument if it can be added by another number in that array and have the 

sum equal to the second argument which is arg(one number) 

i took the long route and here is how it solved the problem below



### code snippet

```

function pairwise(arr, arg) {

  var raa = arr.slice();

  var rra = 0;

  for (var i = 0; i < raa.length; i++) {

    for (var h =i + 1; h < raa.length; h++) {

      if (raa[i] + raa[h] === arg) {

        rra += i;

        rra += h;

        raa[h] = raa[i] = NaN;

      }

    }

  }

  return rra;

}





pairwise([1,4,2,3,0,5], 7);

```

#### Code explanations

So i started with declaring the function pairwise which 

takes in two params

and inside the function we two variables rra is our

 counter where we goanna append 

values to, raa is a duplication of the given array as 

we don't want to modify it directly.

after that we have two of  our for loops that iterate over each element in the arr

after than we have a conditional statement 

if the condition is met then 

we append indexes to our variable raa which is at default to 0

after appending we set than element to NAN so that it cannot be for the second time again 



