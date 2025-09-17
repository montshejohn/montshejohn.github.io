---
Layout: Post
Title: "spinal tap case algo"
Date: 2017-11-08
Catcategories:
---
# Spinal tap case.


With the help of  stackover flow and read-ask-search i got a pretty good idea on how to solve it

and here is how i solved it:

Firstly I created a function called spinal tap, that functions takes one parameter called str short for string as string is a reserved

I should probably change this word when i refactor.

function spinalCase(str) {

Inside the function I have two variables named firstReplacer and the secondReplacer which 

store the regex will use this variables to replace unwanted characters in string 

 var firstReplacer = /([a-z])([A-Z])/g;

  var secondReplacer = / /g;

The first replacer checks for lower case alphabets and Upper case alphabets as well 

while the second checks for empty spaces.

I now use the declared variables to replace the contents of str,

then return it like so:- 

  return str.replace(firstReplacer,'$1 $2').replace(secondReplacer,"-").replace(/_/g,"-").toLowerCase();

So what this basically does ( see what i did there?), is it adds spaces where there are lower alphabets and uppercase 

alphabets,then it goes ahead and replaces spaces with  this dashes "-" after all that we return the results to lowercase 

done.

}



spinalCase('thisIsSpinalTap');