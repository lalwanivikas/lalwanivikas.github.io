---
layout: blog
title: Weather App
day: 2
---

It is day 2 of my challenge and I am once again up late night. But I am happy with what I made today. Today's task was to make a weather app. I was thinking that it might be easier to make but to my surprise it wasn't easy by any measure.

You can try out the app here: You can try out the app here: [http://vikaslalwani.com/projects/weather/](http://vikaslalwani.com/projects/weather/)


Here's how I made the weather app:
---
* I chose Forecast.io for the task. Other contender was OpenWeatherMap, but Forecast.io looked neat so I went ahead with it.
* It had great amount of data in its free tier and API was pretty straightforward to use. So you can say I am happy with my selection.
* One negative point is that it required lat and long coordinates for lookup, whereas OpenWeatherMap took care of that part.
* So I had to use Google Maps API for address lookup and once I had the coordinates I passed it to Forecast.io API and bam! You get all the data you could ever imagine.  
* I used colors from Google's Material Design template and they have some pretty neat collections. I will most probably keep using it for my future projects as well.


Challenges
---
* Making the geocoding work for all regions. Since every region has different naming system, Google responds with a huge object and you have to figure out what to display. It has to be standard for any type of entry - area, city, state, country, landmark etc.
* Another challenge was to make the display time work. If you are viewing weather of Australia then it does not makes sense to show time in UK time. So I had to manipulate the time accordingly.


About ugly home page:
---
My home page is still very ugly as there is literally nothing in it. In fact my whole website is like that. I plan to fix it by continuously learning Jekyll in parallel. After few different projects I will take up personal site design as single day project. This way I can improve the site couple of times in few months. And hopefully I can master Jekyll in the process :)  
