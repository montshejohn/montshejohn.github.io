---
layout: post
title:  "freecodecamp-random-quote-machine"
date:   2017-10-27 16:21:45 +0200
categories: 
---

building a random quoted machine  

free code camps intermediate front end development projects #1

the objective was to build a random quote machine similar to the one shown on codepen.io

the following user stories we're to be fulfilled 

user stories

I can click a button to show me a new quote.
 I can press a button to tweet out a quote
so the instructions stated that we can use which ever API's we want and also we can give it our own personal style.

so the first thing i need to begin with this project was an API that i can use to get random quotes from.

After searching the internet for good api's to use i found this site and used their API

https://whatdoestrumpthink.com/api-docs/index.html#introduction and got the object using JSON 

This is how i used JSON

          // $.get("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(data, status) {

                    console.log(data);

                    $("#prints").html(data.message);//

i could have used AJAX but i prefer JSON over it but anyway since i got the api 

i need to create a HTML file that display the quote's using bootstrap i decorated the page and gave it a simple look

added buttons

div id="button">

            <div class="buttons">

                <button id="Qoute" type="button" class="btn btn-primary" target="_blank" onclick="">Twitter</button> </div>

            <button id="showQoute" type="button" class="btn btn-danger" onclick="getQuote()">Quote!</button> </div>

        </div>

 div class="set">

/div>
afterwards i used CSS to add edit fonts,add colors, and make the file more lookable you can check out the complete random-machine @
https://codepen.io/montshejohn/pen/BwQvPa