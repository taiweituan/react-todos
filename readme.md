# React-Todo

## Demo 
https://my-react-todo.herokuapp.com/

## Pre-requesit
* Install __SQLite__ in your local. Your SQLite data will be stored in `data/` folder.
* If deploying to production server, please install __Postgre__
* Or if you would, change the db dialect under `./db/index.js` file to your preference.

## Install
1. Clone this repo
1. Install dependencies by running `npm i`
1. Build the repo by `npm run build`
1. Start up the server `npm start`
1. Server URL will be `http://localhost:3001`
1. [Optional] For easier front-end development, run `npm run wp-dev` to start-up `webpack-dev-server`.<br>
Also, change the API base url to `http://localhost:3001` if this development method is used under file `./views/actions/index.js`

## Todo
- [x] Have forms inside the Modal
- [x] Have Modal to be pop-up instead of another Route
- [x] Better style in Form and Modal.
- [ ] Seperate Webpack config for different environments (Development/Production)
- [ ] DotEnv
- [ ] Add User Authentication (Passport?)