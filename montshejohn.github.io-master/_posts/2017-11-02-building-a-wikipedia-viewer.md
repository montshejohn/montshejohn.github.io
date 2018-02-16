---
Layout: Post
Title:  "wikipedia viewer"
Date: 2017-11-02 09:46:12 +0200
Categories: 
---

building a Wikipedia viewer

The third project on freecodecamp s intermidiate projects, the aim and user stories weer as follows


1. Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/wGqEga/.

2. Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

3. User Story: I can search Wikipedia entries in a search box and see the resulting Wikipedia entries.

4. User Story: I can click a button to see a random Wikipedia entry.

5. Hint #1: Here's a URL you can use to get a random Wikipedia article: https://en.wikipedia.org/wiki/Special:Random.

6. Hint #2: Here's an entry on using Wikipedia's API: https://www.mediawiki.org/wiki/API:Main_page.

7. Hint #3: Use this link to experiment with Wikipedia's API.


We are a given an URL to use to help us with the random article part so all we need to do is add the URL to a button and set the target as blank so when the user clicks on 
the button it send him/her to a new page that shows the article.
But that's not the first part the first part is to create your HTML file with the things that you will need like your heading, input-box, buttons and etc here is an example of mine
   
     <head>
       <title>wikipedia</title>
      </head>
    <body>
        <h1>wikipedia viewer</h1>
        <div style="float:right;"> <img class="image" src=https://github.com/montshejohn/Assignments/blob/master/freecodecamp-projects/gold.png?raw=true" style="width:304px;height:228px;"></div>
        <div class="move">
            <a href="https://en.wikipedia.org/wiki/Special:Random"><button type="submit" class="btn btn-primary btn-sm" formtarget="_blank">Random article</button></a>
            <input id="shows" type="text"></input>
            <button class="btn btn-primary" onclick=" getsearch()">search</button></div>
        <div class="moved">
            <section>
                <h>what you searched </h>
                <p class "text">you results will 
                 appear here</p>
            </section>
        </div>
    </body>
    
    Now with that done. I created my JavaScript file where i can use the given API and get its object using the get method we get the JSON of the API add it to 
a to a function then inside that function I added variables that contain the values from the JSON that i will need then display them in HTML 
this is how it did it 

function getsearch() {

                var shows = document.getElementById("shows").value;
                $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search=' + shows + '&callback=?', function(data) {
                    console.log(data)
                    var whatWeneed = data[1];
                    var whatWened = data[2];
                    $('p').html(whatWeneed);
                    $('h').html(whatWened);
                });
            };
            The last part was to create a CSS file add some styling there and make it pretty.
so that how i built the Wikipedia viewer you can check it out at codepen with the provided link below
