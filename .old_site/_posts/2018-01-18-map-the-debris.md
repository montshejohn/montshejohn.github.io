---
Layout: Post
Title: "Map the debris"
Date: 2018-01-18
Categories:
---
# Objective 
```
Return a new array that transforms the element's 
average altitude into their orbital periods.


The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
```
## Code snippets 
```
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var n = 3.14159265359;
  var earthRadius = 6367.4447;
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    var altitude = arr[i].avgAlt;
    var total = earthRadius + altitude;
    var cube = Math.pow(total, 3);
    var all = 2 * n * Math.sqrt(cube / GM);
    var ars = Math.round(all);
    results.push({ name: arr[i].name, orbitalPeriod: ars });
  }
  return results;
}

console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 }
  ])
);
```
### Explanation 
For this challange a math formula is very helpful the math formula
```(The formula  is: T = 2_pi _ sqrt(earthRadius + avgAlt to the cube / GM))
```
Now with this formula its much easier to complete the challenge.