---
Layout: Post
Title: "sum all add fib numbers "
Date: 2017-11-09
Categories: 
---
## Sum all odd fibonacci numbers

The exercise really got me going.Given a positive integer, we had to write an alogorithm that returns the sum of all odd Fibonacci numbers that are less than or equal to that integer.
## 
I was advised to make sure that I complety understand the problem and that iam sure of whats required, I first went  and got more info on fibonacci numbers, "The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8."
In my mind i am like well this is easy to do i just a need a for loop there
and an in if else there then i am done,Well to my suprise i ddnt work out as 
planned, so i reached out to my fellow student and he helped a bit with this algo so heres how we did it.
# created a functon that takes one parameter
and under that function we have three variables one to store the current number that we start couting from which is 1 and the previous number that we will increament in this case 0.
function sumFibs(num) {
var prev =0;
var curr =1;
var results =0;
## iteration and condional statement
Here we have a while loop that will help us check that current number we are dealing with is not higher that the given positive integer.then we use a conditional statement (if statement ) to check if the current number is an odd number.if it is we add it to results 
   while(curr <=num){
if(curr % 2 !== 0){
  results += curr;
}
    curr += prev;
prev = curr - prev;
  }
  return results
   ;
}

sumFibs(100000000000000);