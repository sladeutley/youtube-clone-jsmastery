In general, I have set this up to follow along with the git commits, but to get started, I:

1) npx create-react-app app-name
2) create repository in github (DO NOT ADD Readme)
3) connect react project to my github repo (using my notes)
4) set up acct at rapidapi.com so can use youtube v3 api
5) install rapidApi vs code extension
6) install correct packages - copy and paste my dependencies in package.json (which i took from teacher of this course) then type 'npm install' or 'npm install --legacy-peer-deps' (installs same exact versions of dependencies) in terminal. Type in termnal 'npm audit fix' to fix , or 'npm audit fix --force' to fix vulnerabilities, BUT he says not to fix vulnerabilities yet?? --> MAKE SURE HE mentions how to fix this later bc tried to do audit fix force and it made it where there were more vulnerabilites
7) just start following github commits at this point for process

Reference ->
youtube video tutorial i used for this - https://www.youtube.com/watch?v=FHTbsZEJspU&t=5831s
github link - https://github.com/adrianhajdin/project_youtube_clone
rapidapi - https://rapidapi.com/ytdlfree/api/youtube-v31


Deploy the App using Netlify, a free tool that allows you to easily and quickly deploy react apps(2:17:43 in video) -
1) go to netlify.com
2) click on sites
3) scroll all the way down to import, BUT first need to create our react build folder
4) collapse all folders and add file name '_redirects' to public folder. Put in code you see there. This is to fix one issue netlify had with react.
5) in terminal, stop server if need to. then type 'npm run build'
6) right click build folder once it's ready, and click 'open in finder'
7) go back to netlify.com, and drop and drop build folder into where we last were on site. Should be ready soon
*If want own domain name, have fast servers, use professionally, he reccomends hostinger instead of netlify

