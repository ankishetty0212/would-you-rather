# Would You Rather Project

## TL;DR
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
To run this project on your local follow the below steps:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## PROJECT INFORMATION
The **Would You Rather** App is an application where authenticated users can do the following:
1. Post questions with 2 options
2. Submit Answer to questions
3. View Poll Results denoting the number of Votes received per option
4. View the Leaderboard that displays the number of questions asked & answered by each user along with the total score.


There are 6 sections to this application:
1. _'Login'_ page where the authorized users can login.

2. _'Home'_ page with 'Answered' & 'Unanswered' tabs displaying list of questions with respect to the logged in User.

3. _'Question'_ page where the logged in user can answer a question from the 'Unanswered' list.

4. _'Poll Results'_ page where the logged in user can view the number of votes received to each option for a particular question.

5. _'New Question'_ page where the user can post a question with 2 options.

6. _'Leaderboard'_ page where the logged in user can view the number of questions asked & answered by each user along with the total score.


**Technologies/APIs Used:**
1. ReactJS
2. Node & NPM
3. Redux
4. react-bootstrap library for UI
3. DATA API provided by Udacity to save questions, answer to question.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
