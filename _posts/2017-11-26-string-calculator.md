---
Layout: Post
Title: "String calculator"
Categories: 
Date: 2017-11-26
---
#String calculator
The first time i saw this challenge I was like ok
this is easy parseInt,push,filter,reduce done
piece of cake!
But to my surprise there was an un expected turn of events.

## how i planned my approach 
as i said the first thing a need to 
was create function with one perimeter 
then inside the function i had a for loop
that loops through every element the of the
provided argument,now because its a string 
I used parseInt to change the elements to 
integers adding them to an array I declared at the top 
of the function now because the string was separated by commas
the commas in the array are returned as NaN because of the parse Int
I used filter to filter them out, leaving out integers I used a reduce
function that adds every integer in the array with another 
that was it,since the default value of reduce is zero this method will
work for an empty string as well.

### problems i came across 
When solving a challenge the aim is to create a working algo that 
works for different tests most of mine passed it but not all 
so i had to go back.
The first problem was working with different delimiters and new lines
\n that's where regex comes in 
we split the arguments with a regular expression /W/ this splits all 
non word characters,but the problem with this is that 
arguments like "1,\n" will return one instead of an error.
the other problem was working with different delimiters 
if the delimiter was to be a dash (-) this would cause 
major problems because the other test was to check for negatives 
and throw an error with an error message and a display of the negatives found 
if there were to be found. In this case the  dash as a delimiter
will also throw the  error it will be read as a negative so i had to find ways to 
work around that problem for now its hard coded and the algo looks like this 

 ```
const StringCal = numbers => {
  if (numbers.indexOf("-") !== -1 && numbers[0] !== "/") {
    throw new Error(`negatives not allowed`);
  }
  let yu = numbers.split(/\W/);
  let arr = [];
  for (let i = 0; i < yu.length; i++) {
    arr.push(parseInt(yu[i]));
  }
  let filled = arr.filter(x => x >= 0);
  let maped = filled.reduce((a, b) => a + b, 0);
  return maped;
};

console.log(StringCal(""));
console.log(StringCal("1"));
console.log(StringCal("1,23,2,2"));
console.log(StringCal("1,\n"));
console.log(StringCal("//;1;2"));
console.log(StringCal("//-\n-23-2-2"));
console.log(StringCal("1,-2"));

 ```
### take away from the strign calculator
no every simple tasks is as simple as it looks 
always make sure that your code works and it  will work for
different tasks then refactor.

And remember  if code is not tested it doesn't work.
#String calculator
The first time i saw this challenge I was like ok
this is easy parseInt,push,filter,reduce done
piece of cake!
But to my surprise there was an un expected turn of events.

## how i planned my approach 
as i said the first thing a need to 
was create function with one perimeter 
then inside the function i had a for loop
that loops through every element the of the
provided argument,now because its a string 
I used parseInt to change the elements to 
integers adding them to an array I declared at the top 
of the function now because the string was separated by commas
the commas in the array are returned as NaN because of the parseInt
I used filter to filter them out, leaving out integers I used a reduce
function that adds every integer in the array with another 
that was it,since the default value of reduce is zero this method will
work for an empty string as well.

### problems i came across 
When solving a challenge the aim is to create a working algo that 
works for different tests most of mine passed it but not all 
so i had to go back.
The first problem was working with different delimiters and new lines
\n that's where regex comes in 
we split the arguments with a regular expression /W/ this splits all 
non word characters,but the problem with this is that 
arguments like "1,\n" will return one instead of an error.
the other problem was working with different delimiters 
if the delimiter was to be a dash (-) this would cause 
major problems because the other test was to check for negatives 
and throw an error with an error message and a display of the negatives found 
if there were to be found. In this case the  dash as a delimiter
will also throw the  error it will be read as a negative so i had to find ways to 
work around that problem for now its hard coded and the algo looks like this 

 ```
const StringCal = numbers => {
  if (numbers.indexOf("-") !== -1 && numbers[0] !== "/") {
    throw new Error(`negatives not allowed`);
  }
  let yu = numbers.split(/\W/);
  let arr = [];
  for (let i = 0; i < yu.length; i++) {
    arr.push(parseInt(yu[i]));
  }
  let filled = arr.filter(x => x >= 0);
  let maped = filled.reduce((a, b) => a + b, 0);
  return maped;
};

console.log(StringCal(""));
console.log(StringCal("1"));
console.log(StringCal("1,23,2,2"));
console.log(StringCal("1,\n"));
console.log(StringCal("//;1;2"));
console.log(StringCal("//-\n-23-2-2"));
console.log(StringCal("1,-2"));

 ```
### take away from the strign calculator
no every simple taks is as simple as it looks 
always make sure that your code works and it  will work for
different tasks then refactor.

And remember  if code is not tested it doesn't work.

