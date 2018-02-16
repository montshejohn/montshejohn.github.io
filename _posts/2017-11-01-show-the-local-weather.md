---
Layout: Post
Title:  "freecode camp show local weather"
Date:   2017-11-01 09:46:12 +0200
Categories: 
---

show the  local weather 

the second intermediate  project on freecodecamp  to build a weather app, that could find out a user's location and show the current weather

at that location


Objective: Build a CodePen.io app that is functionally similar to this: http://codepen.io/FreeCodeCamp/full/bELRjV.

Rule #1: Don't look at the example project's code. Figure it out for yourself.

Rule #2: Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

User Story: I can see the weather in my current location.

User Story: I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.

User Story: I can push a button to toggle between Fahrenheit and Celsius.

Before reaching the intermediate projects there are lessons on JSON API & AJAX,

teaches us how to use JSON using the get method and how to convert JSON to HTML and etc..

all that came in handy when building the weather app 
here is how i started it
 
$(document).ready(function() {
                $.getJSON("https://ip-api.com/json", function(apiInfo) {
                    $("#show").text(apiInfo.city + "," + apiInfo.region + "," + apiInfo.country + "," + apiInfo.regionName + ",");
                    console.log(apiInfo);
                    var city = apiInfo.city;
                    var lat = apiInfo.lat;
                    var long = apiInfo.lon;
                    var region = apiInfo.region;

using Jquery  the first line means the code included under the $(document).ready(function() can only run once the 
DOM(document object model)is ready for JavaScript code to execute.
under that function we use JQUERY again to the json of a certain API the one you can see above once we got w

have that API we at the same time assign the object to our function with the parameter apiInfo

from there we used stored the required properties of that object into JavaScript variables.
From there I displayed the data from JSON on the HTML, With a bit of styling using CSS i added a background image,fonts and played around with it a bit.

that's how i built my local weather machine you can check it out on codepen using the link below
https://codepen.io/montshejohn/pen/XzbpVd






