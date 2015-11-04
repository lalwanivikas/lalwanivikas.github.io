---
layout: blog
title: Calculator
day: 4
---

I am happy with what I made today. A calculator. Yes, a calculator that just works. No need to take care of what you enter in it, just enter whatever you can and it will show you the correct answer to your query.

You can try it here: [http://vikaslalwani.com/projects/calculator/](http://vikaslalwani.com/projects/calculator/).

Yesterday's project was also similar one, but it had tons of limitations. You could only do one type of operation in it. And even then it had couple of irritating bugs.

So today morning I sat out to write a script to evaluate a string. Any string. My aim was to be able to take any string and be able to process it and return the answer. It was a hard task. I tried couple of approaches and everything failed initially. But slowly I made things work and now it forms the backbone of today's project.

Key points:
---
- Evaluates all types of strings. Does it via a lengthy function.
- Code to handle all types of gotchas (hopefully!). Few examples:
	- even negative string will work
	- won't allow you to enter multiple operators
	- won't allow you to enter operator before a number 
- Is responsive!

Challenges:
---
- Biggest challenge was to make the logic work. Some especially time consuming areas:
	- figuring out that we need to perform subtraction before addition to get the right answer.
	- trick to parse strings starting with a negative value - concat zero :)
- Imagining various gotchas and preventing them from happening
- Making it responsive was relatively easier. Just use % for paddings and margins. Chrome’s dev tools was a major help here.