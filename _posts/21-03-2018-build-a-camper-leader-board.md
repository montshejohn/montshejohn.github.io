---

Type:Post
Title:
Date:
Categories:
---

# Introduction

The objective of this project is to build a free code camp leader board,This project involves the use of APIs

so a bit of knowledge on ajax/API calls will be helpful So all you will need to do in this project is take data

from an API provided by free code camp and display it in a table-form. It was kind of tricky for me at first since

i am just learning React.js but eventually i managed to complete this project.

Below I will talk about some of the packages

I used and my approach to building a camper leader board.

## Approach

Looking at the provided example of how the leader-board should look like, I saw that i will need to use a table like i said in order to

display the data accordingly.I went to react bootstrap got a table there. According to the me it should display as a striped

table but something went wrong there that's because I was not importing react-bootstrap accordingly so stay on the look for that

this is how you will import a Table for example **import Table from "react-bootstrap/lib/Table"**
.
I only added the headers and the table body with no rows yet because I needed data from the API for that.

So now getting data from the API,I thought about it for a minute, should I use Ajax for that ? Or should I use get.JSON?

now another thought came in mind one of our mentors told us about a node package called AXIOS it can also be used to create https requests

so figured let me give it a spin and learn how it works, went to npm read a bit about it then when got comfortable I went straight in

with it made a promise with the provided API and then a call back ill provide code to show you how below.

With that done I added state to my react component and set the state as the data I got from the API.

the data provided was in a from of an Array of objects so I used Array.prototype.map to get the elements that i wanted and added them

to the table using JSX look at this code below to get a feel of how I did that

## what I have learnt ( the take home)

The major take home from this project was,When dealing with API its important to structure the data correctly

in a way that it would be easy for you display and use effortlessly.(coupling and cohesion)

plus I got to play around and learn about a cool node package called AXIOS

# Useful Links

1.  https://react-bootstrap.github.io/[react-boostrap](https://react-bootstrap.github.io/)
2.  [Axios](https://www.npmjs.com/package/axios)
