---
Layout: Post
Title: "No repeats alogrithm"
Date: 2018-01-11 
Categories:
---

# task
Return the number of total permutations of the provided string that don't have repeated consecutive letters.
Assume that all characters in the provided string are each unique.
For example, aab should return 2 because it has 6 total permutations
(aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same
letter (in this case a) repeating.
 ## approach 
In order to accomplish this task and complete the algo.We used Heap's algorithm 
to generate permutations, the algo came to a good advantage.
as we where able to generate permutation of the provided string.

### code
```var temp;

function perms(counter, str) {
  temp = str;
  if (counter === 1) {
    console.log(temp);
  } else {
    for (var i = 0; i < counter - 1; i++) {
      perms(counter - 1, temp);
      if (counter % 2 === 0) {
        let splited = temp.split("");
        splited.splice(i, 1, str[counter - 1]);
        splited.splice(counter - 1, 1, str[i]);
        temp = splited.join("");
    } else {        
        let splited = temp.split("");
        splited.splice(0, 1, str[counter - 1]);
        splited.splice(counter - 1, 1, str[0]);
        temp = splited.join("");
      }
      perms(counter - 1, temp);
    }
  }
}
console.log(perms(3, "aab"));```

###     

now that we have a way to generate permutations whats left is to create
function that will detect and delete repeating letters 

