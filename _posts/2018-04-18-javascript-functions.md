---
Layout: Post;
Date:18-04-2018
Title:"javascript native functions "
Categories:
---

# Introduction to  Functions 
Functions are  values that wrap pieces of code in them so that when called/Invoked

the code in there is can be applied. There are two ways in which you can define a function 

you can use the traditional JavaScript ECMAs way which is 

```

function defineMe(myName){

myName='Montshe';

console.log(myName)

}

```

or you can use the latest ECMAS 6 short hand function like this

```
var defineMe =(myName) => {myName="Montshe"; return myName}

```

I will take us on a little journey on JavaScript functions and how can one use them to their advantage;

## What more can I do with functions?

Functions are very  useful because they help reduce complexity, make code easier to read (single 

responsibility) and most important of all they reduce repetition.

usually functions take a parameter if you look above in the Intro the functions above take in myName as a 

parameter, parameters are similar to variable in behavior, you can add a value to a parameter when calling 

the function like this 

```
defineMe("Montshe")
```
.There is  lot of things you can with functions like 

treat functions as values, add functions within functions(nested functions) return functions and more.

But then I believe the most interesting are these 


```
recursion and closure

```

I have noticed that its quite useful no know these and how to use recursion and a closure, I wrote a blog post on 
each separately feel free to check them out.
