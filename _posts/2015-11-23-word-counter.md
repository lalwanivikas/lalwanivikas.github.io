---
layout: blog
title: Word Counter
day: 23
---

Today I just got an hour to code and came up with a little complex idea for that duration. It's a word counter that I'll complete tomorrow.


Link to app: [http://vikaslalwani.com/projects/word-counter/](http://vikaslalwani.com/projects/word-counter/).

***

**EDIT:** 23rd May, 2016

Out of the list of 24 apps currently on my project page, only this app was incomplete. But not anymore. After a long gap I finally got to it and have converted it into one of the most beautiful and useful apps that I have created.

Don't believe me? [Check it out](http://vikaslalwani.com/projects/word-counter/) for yourself!

It's responsive, accurate, beautiful anf very useful!

This idea came from a word counter site that I use very often to count the number of words in any article that I am working on. Initially I thought it would be easy to accomplish. But as it turns out with almost anything in web dev, nothing is as easy as it looks from the outside.

When I thought of the idea and started coding few months back I was planning to use arrays and simple for loops since I did not know what a regular expression was. Boy oh boy, what a noob I was!

It's super difficult or almost impossible to do what this app is doing without using regex. So I learned some and applied it well.

As with the [maths quiz app](http://vikaslalwani.com/projects/maths-quiz/), before coding I wrote down clear target specs and once again that made the job little easier since I had a set target in mind.

Few key features of the app - it will show:

- normal stats about your text - # of character, words, para etc.
- readability score - based on Flesch Reading Ease score. 
- top keywords.


Few key learning:
---
- Regular expressions(regex) are very powerful. If you know how to use it, it is a great tool to have in your toolkit.
- There is a thing called 'stop words'. It is a collection of most common words in English language that must be filtered out before any kind of analysis. I needed to do it before finding top keywords.
- There is an API for (almost) everything. I didn't know how to calculate readability score, but [found an API](https://market.mashape.com/ipeirotis/readability-metrics) for doing it.
- Nothing beats a simple design. If you look at the app, there is nothing fancy about it but it still looks so nice.
- Responsive design is completely worth the effort. It gets frustrating sometimes to make it work but once you do it, the feeling of seeing your app working great for every screen is priceless!













