---
Layout: Post
Title: "javascript args and parameters explained"
Date: 2018-01-11 
Categories:
---
# Parameters and arguments in JavaScript functions 
function parameters normally in brackets in a function 
are the names listed in on a function as place holders 
if  i may put it that way so.
Arguments are the real/actual values that will be used.
 
## Parameters 
JavaScript parameters are can be of any data type and can be of any numbers.
if a function is to be called with a parameter but without values 
the parameter will hold the default value of undefined.
The parameters in a function are function arguments
There can be 2 types of parameters which are:

## The default parameters 
as said before JavaScript parameters default to undefined
although it may be helpful to set a desired default param 
as opposed to using the default undefined value.

for example this is a simple code example of addition using 
default params 
```
const add =(a,b=0) =>{
    return a + b
}
console.log(add(12,34));
console.log(add(223,34));
console.log(add(11,24));
console.log(add(14));
```
because we set the default value to zero the last output 
will be 14 and not undefined.


### The arguments object
a function can have as many as 255 arguments 
In JavaScript functions have built in arguments objects called arguments 
objects, the args object has an array of arguments used when the function 
is called.


# Parameters and arguments in JavaScript functions 
function parameters normally in brackets in a function 
are the names listed in on a function as place holders 
if  i may put it that way so.
Arguments are the real/actual values that will be used.
 
## Parameters 
JavaScript parameters are can be of any data type and can be of any numbers.
If a function is to be called with a parameter but without values 
the parameter will hold the default value of undefined.
The parameters in a function are function arguments
There can be 2 types of parameters which are:

## The default parameters 
as said before JavaScript parameters default to undefined
although it may be helpful to set a desired default param 
as opposed to using the default undefined value.

For example this is a simple code example of addition using 
default params 
```
const add =(a,b=0) =>{
    return a + b
}
console.log(add(12,34));
console.log(add(223,34));
console.log(add(11,24));
console.log(add(14));
```
because we set the default value to zero the last output 
will be 14 and not undefined.


### The arguments object
a function can have as many as 255 arguments 
In JavaScript functions have built in arguments objects called arguments 
objects, the args object has an array of arguments used when the function 
is called.




