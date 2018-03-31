---
Layout: Post
Title: "Building a recipe box and using local Storage" 
Date: 2018-03-31
Categories:
---
# Introduction
The third react project in free Code Camp, Building a recipe box.

I guess a recipe box is a way to create a list of ingredients, meals to share with people 

or store for later use.Anyway the objective was to build a recipe box that looks like the one 

provided,like always there are a bunch of users stories that need to be fulfilled some of them

are to use Sass,React.js,for this project .

## Approach,lessons and using local storage.
Now I must say the past react.js project weren't really hard, I was able to do them within a week 

maybe I could have even did them in less time but I wanted to take more time and make sure I understand 

what I was doing.

The recipe box though this one is going to take some time to finish so far here is what I have implemented and

learned.So looking at the example I noticed a that they used an Arrcodion & Panel to display the recipes 

ok so typical me lazy I went to react--bootstrap to see if I can use one of their components, which brings me

the first thing i learned through this project **always read docs!!**.I say this because i have failed miserably using 
The Accordion and Panels from react--bootstrap because I did not really read their documentation.

So in order to use react-bootstrap components you have to import them like this *import Panel from "react-bootsrap/lib/

Panel"* and then you will need to add the provided CSS link to your HTML file.

with a basic implementation in place I needed to work on the functionality.

One other user story was that the user can refresh the page and still see all the added recipes 

saved in the browser's local storage, so I will need to use Local-Storage 

### Local Storage

With local Storage web app can store data locally within the user's  browser
the local storage store data with no expiration unlike session storage and its limit is more than 5megabytes
unlike cookies.

To use local storage you don't need to install any packages all you need to is 


create a local storage name/value pair like this localStorage.setIteam("name","Johannes");


and retrieve the name from the local storage you will need to do this 


localStorage.getIteam("name");


and if you want to store a collection of data lets say an array of objects (Known as JSON)


here is how you would store the data, since local storage accepts strings you will need to 


do this localStorage.setIteam("data",JSON.stringify(data);


lets assume data in this case was a value in JSON format


So with the data stored you will probably want to use somewhere, to retrieve that data 


you will do something like this... 


var retrieve data = JSON.parse(localStorage.getIteam("data"));


then to clear you will do something like this 


localStorage.clear().

## Conclusion
there will be a complete blog post on how i completed the whole project,
more tips on how to tackle projects like the recipe-box and more...stay tuned.
