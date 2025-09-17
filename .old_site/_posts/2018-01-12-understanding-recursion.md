---
Layout: Post
Title: "understanding recursive functions"
Date: 2018-01-04 
Categories:
---
# Understanding recursive functions

Recursion can be a some what tricky to understand especially for a novices in 

the programming scene.Recursive functions are functions that call them self 

repeat ably.



unlike using loops to iterate over elements, recursion in some places work 

best , for example lets say you want to create your own reduce function

that works just like the reduce function in JavaScript

you will do something like this 


```
 function reducer(a, value) {

  if (a.length === 0) return value;

  else {

    value += a.pop();

    reducer(a, value);

  }

}

console.log(reducer([1,2,3,4], 0));
```


##  example explained 



in the  above code we created a function 

called reducer  it take two parameters(a for array and value:we use this as our counter 

inside our function we an if statement.



The if statement will be our   base case where our we prevent the function from calling itself again,

when working with recursive functions we need if statements we have to prevent infinite loops because a recursive function

is a functions that calls itself recursively we need a breaking point to prevent for infinite

loops the if statement in the function helps with preventing that

so the if statement checks if the length of the array is equal to 0 if yes 

then it return value which in the moment is zero

and if array.length is not equal to zero

we do our recursive base where the functions calls itself until the condition in the if statement is Ture

this is what happens we append the value in the variable value with the last element of a

as at the same time deleting the element from a 

so it deletes from a and adds to value

this is tricky to understand at first but it get better when you try out the code yourself, 

after the append we do the recursive case where the functions calls itself.

this will go on until array.lenght is equal to 0 

because it deletes an element from array and appends it to our variable value 

and the end when our desired condition in the if statement is met we return 

value which is the total sum of all the elements in a.