---
Layout: Post
Title: "JavaScript calculator"
Date: 2018-01-25
Categories:
---

# JavaScript calculator.

calculators are awesome tools that most people (if not all)

use to set their budget,do taxes,do mathematics

make it more enjoyable we all know "one does not simply enjoy math"

with that said I built a JavaScript calculator it was a pretty challenging experience but

I must say it was beneficial to my understanding of  the JavaScript language 

## reflections.

for this project i used JavaScript, the Document Object Module and a bit of Cascading Style Sheets

### The design (UI).

So just like many other calculators the layout includes buttons 

a screen and a frame if we can call it that.

so most of this was done using CSS.
 
There is some inter activity there where you can click a button and the 

value of the button will show on the screen and you can click a button to 

clear whatever is displayed on the screen.

To align the buttons i used CSS flow to arrange the buttons well 

add make them pretty with (divs).

### JavaScript.

The script this is where most of the process happens like the displaying 

of a button's value, clearing of values and the actual calculations that

must be done by a calculator.

There is a heavy use of Events (onclickEvents) i could have used Event

delegation but I did not understand how it worked so i will study

further on Event delegation and try to implement in on the current project.

Now coming to the calculations I used a Javascript function called Eval()
```
Description
eval() is a function property of the global object.

The argument of the eval() function is a string. If the string represents an expression, eval() evaluates the expression. If the argument represents one or more JavaScript statements, eval() evaluates the statements. Do not call eval() to evaluate an arithmetic expression; JavaScript evaluates arithmetic expressions automatically.

If you construct an arithmetic expression as a string, you can use eval() to evaluate it at a later time. For example, suppose you have a variable x. You can postpone evaluation of an expression involving x by assigning the string value of the expression, say "3 * x + 2", to a variable, and then calling eval() at a later point in your script.

If the argument of eval() is not a string, eval() returns the argument unchanged. In the following example, the String constructor is specified, and eval() returns a String object rather than evaluating the string.
```
#### reference Links.
<https://stackoverflow.com/>

<https://developer.mozilla.org/en-US/>

<https://www.w3schools.com/js/>

<https://stackoverflow.com/>




