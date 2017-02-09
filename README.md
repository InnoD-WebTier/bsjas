# Berkeley Student Journal of Asian Studies

By [Innovative Design](http://innovativedesign.club)

### Overview
This is the website for the Berkeley Student Journal of Asian Students. Below, you can find a guide to managing the different parts of the website, such as updating officers or posting new blog articles. Please read the section of static site generators first to understand how this website was built and updates work. You should already be familiar with Git, Github, and basic HTML, CSS, and Javascript in order to maintain this website.

### Static Site Generators
A static site generator is a tool that allows web developers to write relatively complicated code for their web pages, and then reduce this to simple static HTML pages. They typically make it very easy to host websites. For this project, the Innovative Design team used [Gatsby.js](https://github.com/gatsbyjs/gatsby). A majority of our project code is written in React, which is then bundled into static HTML pages that can be found in the `public` folder.

### Changing Officers
In order to update the officers, navigate to the `/pages/data/about.js` file. You'll notice that there's a field with the description for the website (this shows up at the top of the About page), along with a list of the officers and bloggers. You'll also notice the file has an interesting format. It is very important to make sure to maintain this and follow the example formatting of the data already there (don't forget any commas). To update an officer, simply add their name to the list. The website will automatically try to find a photo of the officer in the `/pages/assets/team/` directory, so make sure there's an image with their name as listed in the `/data/` directory using a `.jpg` extension.

### Making a New Blog Post
To start, all the blog posts are found in the `pages/blog/posts/`. You'll notice two things. First, every file has the extension `.md`. Second, every file has some strange information at the start. The extension stands for markdown, and you can think of it as how the web lets you write as if you were in a text editor (Microsoft Word, Pages) on your computer. You can read about the syntax for it [here](https://guides.github.com/features/mastering-markdown/). This document you're reading right now, is in fact, also written in markdown! The header information at the start of every file is the metadata. This is important for categorizing each post into which part of Asia it pertains too, organizing posts from newest to oldest, along with a couple other minor things. Please make sure this information is correct before publishing a blog post, or there could be a possible error. Otherwise, this should be as straightforward as creating a new article and setting the correct metadata.

### Checking that Changes Worked
Before publishing updates to the site, you should manually check that the updates you made worked and didn't break important parts of the website. To do this, `cd` to wherever you have your local copy of the website and run the command `gatsby develop`. Next, open the link that your terminal gives as an output in your browser, and check that your changes were made. Gatsby has live reloading, meaning that if you change any of the HTML in the files and save, the change will show up in the browser after a second or so.

### Pushing Updates to the Website
In order to update the OCF hosted website, you need to first make the appropriate updates you want, then generate the static HTML web pages. Next, you need to update the Github repo with your changes so everyone can work on the latest copy of the project. Last, you need to update the web pages currently hosted by the OCF. This process is easier than it sounds.

To start, runt he command `npm run-script deploy` from the project root directory which will generate the new static HTML files in your `public` folder, while also pushing the latest version of the website to Github. Next, either using SFTP or a SFTP client such as Cyberduck (feel free to Google, they have a very simple tutorial), move the contents of the public folder into the `public_html` folder in your OCF account. You should already have instructions on how to access this account. 
