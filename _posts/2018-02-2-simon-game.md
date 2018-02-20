---
Post:
Date:
Title:
Categories:
---

# Simon

Simon is an electronic game of memory skill invented by Ralph H. Baer and Howard J. Morrison, with software programming by Lenny Cope. The device creates a series of tones and lights and requires a user to repeat the sequence.

# Implementation

The Design of the game that I designed look a bit different from the original game
I kept it as simple as i could but at the same time trying to make work and look a bit better.

## Simulating the lighting

For the game to work we need a sequence of lighting and tones that a user has to repeat.
To better make this work i used a math.floor and math.random multiplied by four to get a random number
now that we have a random number we store elements that we need to light up in an array.
We can now access the element at the index of the random number we got and apply and light that element up,in order to create light on and off effect I used opacity heres how the code looks like

````
    function showColor() {
        var randomno = Math.floor(Math.random() * 4);
        aI.push(arr[randomno]);
        var i = 0;
        var interval = setInterval(function () {
            showUp(aI[i]);
            i++;
            if (i >= aI.length) {
                clearInterval(interval);
                player = [];
            }
        }, 600);
    }

    function showUp(tile) {
        document.getElementById(tile).style.opacity = 0.9;
        window.setTimeout(function () {
            document.getElementById(tile).style.opacity = 0.3;
        }, time);


    }
    ```
     thanks to the setInterval methods  we can set the elemenst lights on and off
     one time in a random sequence then calling another function that increases
     the elements opacity and after 600 milliseconds it decreases it back to 0.3,This creates an on/Off
     effect.
