# Express Eseentials

## 1. Setting up Express
### 1.1 Intro
https://expressjs.com/
Install node and npm
https://nodejs.org/en/
node -v
npm -v

### 1.2 Express application generator
CLI tool
npm install express-generator -g
Go to an empty folder and run the command
express --view=hbs
It will create the project structure.
Run:
npm install (To install all the dependencies)

## 2. Up & Running
### 2.1 Intial node server setup with Express
mkdir express-app
cd express-app && npm init (If first code executes then go to next or skip)
npm install --save express nodemon (express and nodemon server)
Package.json changes
"scripts": {
    "start": "nodemon ./index.js --exec babel-node -e js"
},
Dev dependencies:
For ES6 code support:
npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0
Create .babelrc file to include all the presets which will be compiled to support ES6.
Create index.js file - entrypoint

### 2.2 Add data to Server
Mock JSON data: https://www.mockaroo.com/

### 2.3 Create a basic route
app.get('/', (req, res){ res.send('test'); });
'/': path, req: request(GET, POST, PUT, DELETE) res: response we receive

### 2.4 Test endpoints with Postman
https://www.getpostman.com/downloads/
Test endpoints
localhost:3000/newItem
localhost:3000/item with postman

### 2.5 Create a basic data endpoint
res.json(data);