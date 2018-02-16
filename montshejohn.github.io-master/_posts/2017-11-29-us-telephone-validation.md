---
Layout: Post
Title: "Us Telephone validation "
Date: 2017-11-29 
Categories:
---

# Validation 

The action of checking or proving the accuracy of something 
## 
I did a challenge that required validation of a US telephone number
```Return true if the passed string is a valid US phone number
The user may fill out the form field any way they choose as long as it is a valid US number. 
The following are all valid formats for US numbers: ```

-555-555-5555,

-(555)555-5555,

-(555) 555-5555,

-555 555 5555,

-5555555555,

<-></->1 555 555 5555

For this challenge you will be presented with a string such as "800-692-7753" or "8oo-six427676;laskdjf". Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is "1". Return true if the string is a valid US phone number; otherwise false.

 it appears that the most easiest way to complete this hallage was to use regular expressions (reg ex) and trust me my reg ex skills 

are not that advanced to situations like this so luckily i know this awesome site that helps with reg ex  its

called online reg ex, its an online reg ex tester and debbuger, 

it was very helpful through out the attempt i used it to refer to some of the tokens i didn't know.

Now my first attempt was not bad i was able to validate some of the numbers  correctly 

but then every time i changed or added more reg ex tokens to support the remaining numbers the 

regex completely broke, so i got stuck for a minute there.Thanks to the mobbing session 

with one of our mentors and my fellow coders. I got a clear picture on how i will make the validation work .

all i needed to do was to sort out the numbers from less complex to complex 

then break down the reg ex into smaller parts that have single responsibilities.

and viola it worked like a charm. 