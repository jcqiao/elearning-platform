# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


### `npm run jsonserver`

Starts up a server on port 5001.
Open [http://localhost:5001](http://localhost:5001) to view it in your browser.


### `npm run deploy`

Deploys project on github server.

### `Directory Design`
```
src/
├── assets/
│   └── images/
├── components/
│   ├── Navbar.js
│   ├── Sidebar.js
│   ├── CourseCard.js
│   └── ...
├── pages/
│   ├── Home.js
│   ├── Course.js
│   ├── Profile.js
│   └── ...
├── styles/
│   └── _variables.scss
│   └── main.scss
├── utils/
│   └── api.js
├── App.js
├── index.js
└── recoilState.js
```