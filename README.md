# Berkeley Student Journal of Asian Studies

By [Innovative Design](http://innovativedesign.club)

### Overview
This is the website for the Berkeley Student Journal of Asian Students. Below, you can find a guide to managing the different parts of the website, such as updating officers or posting new blog articles. First, we'll go over the structure of the website project. To start, we'll introduce the framework used to build the website. We used Gatsby.js, which is a static site generator. This is a way of saying that Gatsby allows developers, like us, to write more complex code and then does the hard work of simplifying it into simpler code, or static pages, which can then be hosted without requiring more fancy tools. This is how we are able to host the website on Github pages.

### Publishing updates to the website


### Updating officers
In order to update the officers, navigate to the `/pages/data/about.js` file. You'll notice that there's a field with the description for the website, along with a list of the officers and bloggers. You'll also notice the file has an interesting format, make sure to maintain this and follow the example formatting of the data already there (don't forget any commas!). To update an officer, simply add their name to the list. The website will automatically try to find a photo of the officer in the `/pages/assets/team/` directory, so make sure there's an image with their name as listed in the `/data/` directory using a `.jpg` extension.

### Publishing blog posts
To start, all the blog posts are found in the `pages/blog/posts/`. You'll notice two things, one that every file has the extension `.md` and that every file has some strange information at the start. The extension stands for markdown, and you can think of it as how the web lets you write as if you were in a text editor (Microsoft Word, Pages) on your computer. You can read about the syntax for it [here](https://guides.github.com/features/mastering-markdown/). This document you're reading right now, is in fact, also written in markdown! The header information at the start of every file is the metadata. This is important for categorizing each post into which part of Asia it pertains too, organizing posts from newest to oldest, along with a couple other minor things. Please make sure this information is correct before publishing a blog post, or there could be a possible error. Otherwise, this should be as straightforward as creating a new article and setting the correct metadata.
