---
Layout: Post
Title:  "sorted Union"
Date:   2017-11-02 08:41:35 +0200
Categories: 
---
the task was to write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

this is how i did it.


function uniteUnique(arr) {
created a function called uniteUnique that takes a single parameter called arr;
    var results = [];
    create an empty array to store sorted numbers
    var arrayed = Array.from(arguments).reduce(function(a, b) {
        return a.concat(b);}); 
created a variable called arrayed witch takes the arguments called and duplicates them into an array assigning it to
the variable arrayed.Then we add a reduce function with the parameters a and b
the reduce function in this case flattens the array by concatenating each element in the multidimensional array
therefore we have one array with all the elements in it, and then we can iterate through it using a for loop
    for (var i = 0; i < arrayed.length; i++) {
        our for loop starts at index 0 and iterates through the last element of arrayed.
        if (results.indexOf(arrayed[i]) === -1) {
    in the same scope of the for loop we have our conditional statement which checks 
    if the index of the current element that the iteration is at is available in our empty array 
    that we created above. If the index of a certain element is unavailable in an array of string 
    the output will be -1 thus we used it in our conditional statement 
   now if that element is unavailable in out array we add it to the array with 

            results.push(arrayed[i]);
            .Push arrayed[i]adds only the current element at i then stops 
            then the for loops starts again the above step check if it unavailable if true it adds the elements
        } 
        because we used strict equality only the elements that have the index of -1 will be added
        so if an element is already added in the array the index of it wont be -1 because it there 
        the index will be greater than or equal to zero and because of that, element will not be added.

    }
    return results;
the final part is to return results which was the empty array we defined in above our for loop and if 
the empty now contains elements added by the push method and therefore no duplicated of those elements.because we used strict equality only the elements that have the index of -1 will be added
        so if an element is already added in the array the index of it wont be -1 because it there 
        the index will be greater than or equal to zero and because of that, element will not be added.
    
}
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);