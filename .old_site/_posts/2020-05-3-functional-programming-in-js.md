---
Layout: Post
Date:
Title: "Functional Programming in JavaScript"
Categories:
---

# Functional programming in JavaScript

##### functional programming one of the many paradigms or styles of programming, on a higher level functional programming is about decomposing a problem into a bunch of small and reusable functions that take some input and return a result without mutating or changing data.

 
##### In this post, we will be exploring how we could use functions in javascript to our best we will be learning about these concepts

- higher-order functions
- Composition

let us start with a quick refresher and see how we can pass functions as values and or passing a function reference as a value to

> below we create a function called greet, all this function will do is a return a string, we then pass the function reference to a variable called result notice that we are not invoking the function with () otherwise the value of the variable will be the result of the function "Hi there" we explicitly want to pass in the function's reference and not the value.

```
function greet() {
    return "Hi there";
}
let result = greet;
console.log(greet());
```
> We can also take go a bit further and pass a function as an argument to another function like this: declare a function that takes in one parameter (we expect the argument to be a function ref) then log the result.
```
function generateMessage(message){
console.log(message())
}
generateMessage(greet)
```
## higher order functions
##### A higher order function is a function that takes a function as an argument or returns a function
map and setTimeout are good examples of a higher order function
because they both take functions as an arguments
below we declare an array of numbers then call array.map passing in a
> function(number)return number * 2
```
const numbers = [1,2,3];
const numberMultplied = numbers.map(number => number * 2);
```
```
setTimeout(() => {
console.log("hello world")
}, 2000);
console.log(numberMultplied)
```
## Function Composition
**Function composition** is the process of combining two or more **functions** to produce a new **function.**
> examples of function composition
>
> lets say we has string "composition" and we want to capitalize that string to upperCase and wrap it a an

an html element say an H1
we can do something like this
```
const str = "composition";
const wrapcapitazedStringInTag = "<div>" + str.toUpperCase() + "</div>"
console.log(wrapcapitazedStringInTag)
```
now we can attempt to solve this problem using a functional programming style technique
we will implement steps using small re-usable functions like so
```
const str = "composition"
const capitalize = str => str.toUpperCase();
const wrapcapitizedStringInTag = str => `<div>${str}</div>`;
```
> now we have two small re-usable functions where each takes in an input and returns a result;

to get the final result to our solution we can invoke our functions like so
```
const result = wrapcapitizedStringInTag(capitalize(str));
console.log("result", result)
```
> going from right to left we invoke the capitalise function passing in our declared string as it's argument
>
> this will return the string capitalized , then we pass the value to our wrapcapitizedStringInTag function
returning the final result as a capitalised string wrapped in an HTML tag


## Composing and Piping

> There's a utility library called lodash that has many packages that could be used for functional programming
> 
we will be going through two functions from lodash being "compose" and pipe
lets say we add another function to our previous solution, we add a function that removes white spaces from a given string.n
```
const str = "composition"
const capitalize = str => str.toUpperCase();
const removeWhitespaces = str=> str.trim();
const wrapcapitizedStringInTag = str => `<div>${str}</div>`;
const result = wrapcapitizedStringInTag(removeWhitespaces(capitalize(str)));
console.log("result",result)
```
> With that added we can see that our result is starting to become hard to read with the increased number of parentheses
> 
that's where the compose function from lodash comes
```
import {compose} from "lodash/fp"
const transform = compose(wrapcapitizedStringInTag, removeWhitespaces, capitalize);
console.log("result",transform(str))
```
> After installing lodash we can import we call the compose function from the utility library
> 
and pass in three arguments being references to our previously declared functions

compose is another example of a higher-order function because it takes functions as arguments and returns a new function that is a composition of all those functions

> now the code looks cleaner the only issue here is the order of operations we need to read the code from right to left

this can get tricky
 
> we can solve this problem with the pipe function and list our function in the order we want to apply them like so
```
import {pipe} from "lodash/fp"
const transform = pipe(removeWhitespaces, capitalize, wrapcapitizedStringInTag);
console.log("result",transform(str))
```

>**source**: Got a-lot of insight around these  topics from watching a tutorial by Mosh I suggest you check out his channel to learn more.