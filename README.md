# Treehouse Cage Match
## Description
This project is a single-page application that sets up a competition between two teamtreehouse.com students. Each student's Treehouse user name is used to pull data from teamtreehouse.com. This data is for the award badges each student has received from course work done on the website. A winner is determined based on which student has more badges.

[View assignment here](https://github.com/nss-nightclass-projects/treehouse-cage-match)

### Technologies Used
- HTML5, CSS, JavaScript
- JQuery
- Bootstrap

### Features
- The site has two inputs and a button

- In the inputs a user types in a treehouse username and then hits the button

Once the button is hit the code will:

- Make xhr requests to teamtreehouse and return the profile usernames, the gravatars of the two profiles, and the total number of points for each profile
- Display who the winner is and show their badges using the bootstrap grid system
- The page is modeled on the following mock-up:
#### Mock-up
<img width="551" alt="cage-match-mockup" src="https://user-images.githubusercontent.com/33577725/38696399-9cf3bee8-3e54-11e8-9db2-a7b7917d9ea3.png">

## Screenshot
### Single-page application
![cage-match-post-execution](https://user-images.githubusercontent.com/33577725/38696377-8f5aa60c-3e54-11e8-88db-379d35888666.png)

## How to Run
1. Go to: `https://www.npmjs.com/package/http-server` and install "http-server".  
2. Navigate to the project folder in command line interface and type: `http-server -p 8080`  
3. This will show at: `http://localhost:8080` in your internet browser.

## Contributors
Alicia Zaludova
