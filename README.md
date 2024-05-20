**All my learnings while building this app comes here;**

**Changes to do in package.json while running locally vs pushing to Github pages for deployment**
Add these lines while deployment
1. "homepage": "https://raghul-pk.github.io/Buildd-PK/", (line-5) 
2. (inside scripts) "predeploy": "npm run build", (line-23)
    "deploy": "gh-pages -d build", (line-24)

**UI/UX**
1. Inspired from Google's Read Along (Main Menu bar) and LinkedIn (Social section). However, the overall Poor look quality might be attributed to the person who built this project (me)
2. Idea is to create lots of interactive touch-points for the user to learn actively instead of just passive consuming
3. HomePage : The most difficult aspect for me to think of, but somehow thought of a design and implemented it (https://www.youtube.com/watch?v=6TYkDy54q4E&t=8s --> This guy's content is pure gold. Short, motivating and uplifting front-end dev stuff) 

**New Feature (added)**
1. Descriptions for MCQs answers
2. Notes : So, that the user can quickly jot down thoughts that pop up while learning 

**New Feature ideas (to add)**
1. Magic Searchbar : Ask it anything related to businness/products. It will provide you answers regarding the question/problem asked and find and load relevant posts and learning sections for the user to skill them up.
2. Buildd Gallery : Buildders can build and showcase their stuff here, for fellow users to give feedbacks.

**Deploying an app on Github Pages with client-side routing**

Ref : https://medium.com/@swarajgosavi20/how-to-deploy-react-app-with-client-side-routing-on-github-pages-8a3fefe5b0d5
1) Why do we use HashRouter instead of BrowserRouter and what is the difference ?

**================================== Daily Journal =================================================**

14/05/24 --> Added home page (I love the design). Still have to improve the Main menu bar design (it's unnecessarily occupying space and disturbing the interactivity). Also, have to learn and implement responsiveness across the website.
