# Berkeley Student Journal of Asian Studies

By [Innovative Design](http://innovativedesign.club)

### Overview
This is the website for the Berkeley Student Journal of Asian Studies. This is a guide to managing the website. We use the static site generator [Gatsby.js](https://github.com/gatsbyjs/gatsby). If you're curious about what a static site generator is, you can read more [here](https://davidwalsh.name/introduction-static-site-generators). You should be familiar with Git, Github, and the basics of HTML, CSS, and JAvascript in order to maintain this website. We recommend using either a Macbook or a Linux-based OS to do this work.

### Project Structure
Let's go over the project structure really quick. To start, the CSS files are located in the `css` directory. We use SASS to write our CSS. The SASS is all included in the the `main.scss` file, which is then compiled and used in the project. We use React, a frontend framework from Facebook, to write the bulk of the website. These files can be found in the `pages` directory. Static data is stored in the `/pages/data` directory, which contains JSON-formatted objects for each page of the site. These can be modified to update the site, which we will explain later on.

### Useful Gatsby Functions
This section covers specifics of Gatsby that the website manager should be familiar with. It may be updated in the future.

`prefixLink()` - This function is special to Gatsby, and you should in case any link referencing another part of the project with this function. The purpose is as follows. During development, a link within this function will evaluate to `/link`. During deployment, it will evaluate to `/linkPrefix/link`, where the `linkPrefix` value is defined in `config.toml`. If you are hosting the project on Github, the `linkPrefix` should be the name of your repository. If you are hosting on OCF, the `linkPrefix` should be the ~ symbol followed by the name of your account with the OCF.

### Updating Officers
The data for the officers is stored in the `/pages/data/about.js` file. The functional logic of this page is as follows: each officer will be added to the page based on the data in the file, and then the site will try and find an image for each officer in the `/pages/assets/team/` directory, starting with the officer's name and ending with a `.jpg` extension. If the image is missing, a broken image link icon will show up. Please make sure to name images appropriately and keep the structure of the `about.js` file consistent.

### Making a New Blog Post
All blog posts are found in `pages/blog/posts/` directory. Each blog post is written using markdown and has special meta data in the header of the file. It is important to maintain this format for every blog post. The meta data is useful for categorizing the posts and making sure that readers can properly view them. To learn more about how to write markdown, we suggest reading [here](https://guides.github.com/features/mastering-markdown/). Markdown, as the name somewhat suggests, allows a user to style text, or "mark it down," using predefined syntax. The file you are reading right now, in fact, is written in markdown. Again, please make sure the header information is accurate and that there are no misspellings in the header information.

### Publishing Updates to the Website
First, you should manually check that the updates you have made were successful and will not break any important functionality of the site. Gatsby allows you to run a local copy of the website to check this. You can think of it as a website only you can view in your browser. To start, open up your terminal and `cd` to wherever you have stored the project directory. From the root of the project directory, run the command `gatsby develop` (a list of possible commands can be found in the `package.json`). Next, navigate to the link returned in the console in your browser, and check that the changes you made to the website worked. Check the browser console for any error messages, and fix if necessary.

Second, you should commit and push your changes to a Github repo that your entire team has access to. This is the best practice for ensuring that everyone on the team can pull the latest version of the website for development if need be. To do this, you can run the command `npm run-script deploy` from the project root directory. This will transform the various React / SASS files into basic, static HTML, which will be saved in the `public` directory. The `public` directory is what we put on the OCF servers to host the website. To move the contents of the public folder to the OCF, open a connection to the OCF server (you should have the login credentials for your organization) using either SFTP or a SFTP client, and simply move the contents into the `public_html` folder there. You should see your website update with the changes immediately.

The instructions have been simplified here.

1. Make desired changes to the website.
2. In terminal, `cd` to the project's root directory.
3. Run `gatsby develop` and open the output'd link in your browser. Check that the changes have taken effect.
4. Run `git add .`
5. Run `git commit -m "<MESSAGE ABOUT YOUR CHANGE>"`
6. Run `git push origin master`
7. Run `npm run-script deploy`
8. Drag the contents of the public folder into the `public_html` folder on your OCF account. 
