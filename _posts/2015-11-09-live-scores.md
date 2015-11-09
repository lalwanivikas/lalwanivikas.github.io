---
layout: blog
title: Live Scores
day: 9
---

I found last couple of projects little easier to handle, so today I decided to take up something that was borderline impossible to finish. But in the end it also turned out to be not so complex. Possibly because I found the right resources/tools to get going.

You can not see the today's project in action unless you download/install it yourself on your machine. If you are interested you can do so from this repo:

[https://github.com/lalwanivikas/lalwanivikas.github.io/tree/master/projects/live-scores](https://github.com/lalwanivikas/lalwanivikas.github.io/tree/master/projects/live-scores).

Once you have downloaded:

- `cd` inside the folder
- run `npm install`
- run `npm run build` to make Example.app
- run `npm start` to run app from CLI without building Example.app package


So today's project was a desktop application to view live scores for ongoing cricket matches from the mac menubar. No need to visit any website. Just click the nice menu on your menubar and you will get scores for all international matches currently in progress.


Key Points
---
- It uses Cricinfo's API. It's not official and hence not documented. I saw they were using it to update their scores so I thought of using it as well.

- Main application is built on Electron platform. Electron allows you to build native desktop applications in HTML/CSS/JavaScript. It's pretty powerful and is undergoing rapid development.

- Since I had to make menubar app, I found a package which helped me a lot in doing that. It's appropriately called [Menubar](https://github.com/maxogden/menubar).


Challenges
---
- Major challenge was to get used to Node again very quickly.
- Also this was my first time in Electron, I had to spend time getting used to the platform.
- There are still few bugs remaining to be fixed. Since I personally plan to use this app, I will fix those in upcoming days.