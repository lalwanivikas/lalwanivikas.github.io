---
layout: blog
title: Toy Calculator
day: 3
---

Note: toy calculator is buggy. For accuate answers you should check out [a little better version](http://vikaslalwani.com/projects/calculator/).

Today's task was to make a basic calculator in HTML/CSS/JS. It looks very easy from the outside but is actually quite complex. Plan was to let a user enter any string and then evaluate it to display the final result. But I was able to only implement a subset of this functionality as parsing a complex string, is well, complex. 

In its current shape you can enter only a string consisting of one type of operator to get the correct result.

You can [try the app here](http://vikaslalwani.com/projects/toy-calculator/).

Key Points
---
- Designing the app was easy. Nothing complicated. Just basic collection of divs with color combinations from Google's Material Design color pallette.
- It takes a string and parses it to create an array of numbers entered.
- Then the array is passed to the respective function (add, multiply etc.) to calculate the answer.
- There's a clear button to clear the displayed output.
- Couple of edge cases:
	- If an operator is pressed twice, then instead of adding it to the string we need to replace the last one one with the latest entry.
	- if someone presses a number after pressing 'equate', then we need to clear the display area and start with fresh string. Otherwise it will keep adding numbers to the existing string. (just checked - it's still not bug free :( )
	

Challenges
---
For a good amount of time I was stuck in making the whole string evaluation work. But an hour back I decided to abandon it and ship something basic. I will take up string evaluation as a project for another day.
