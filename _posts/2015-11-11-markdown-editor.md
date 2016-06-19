---
layout: blog
title: Markdown Editor
day: 11
---

It's wrong to call today's project 'Markdown Editor' as it can't even do 5% of what a real markdown editor does. I write these posts daily in markdown format so I thought that making a markdown editor would be a great idea without realising how complex it is. 

You can try the 5% version [here](http://vikaslalwani.com/projects/markdown-editor/). 

Now I have special respect for the guys who have successfully built similar stuff. After thinking about the problem the max I could achieve was the ability to convert headlines and paragraphs from markdown to HTML. And that too with restrictions. This project was way over my current abilities. And just not possible to do in a single day.

Key Points:
---
- Currently the app can only convert headlines (h1, h2 and h3) and paragraphs(p) to their respective HTML tags.
- To convert a h1 type `# Text_Here`. Space is necessary :)
- Follow similar procedure for h2 and h3.
- A better option would have been to make an full Node app using an existing engine like [Showdown](https://github.com/showdownjs/showdown). There are tutorials out there for this and I might actually take it up as a project some day.