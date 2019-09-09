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

### 2.6 Add a static route for file serving
app.use(express.static('public'));
http://localhost:3000/tent.jpg
app.use('/images', express.static('images'));
http://localhost:3000/app-images/rocket.jpg

## 3 Routing with Express
### 3.1 Routing: Parameters
app.get('/item/:id', (req, res) => {....});
req.params.id

### 3.2 Routing: Route handlers
1. Block of code inside route.
2. Multiple routing handlers can be there per routing path but note that only one res.send can be used.

### 3.3 Routing: Common methods (end, redirect, download etc)
http://expressjs.com/en/guide/routing.html
Response methods:
1. res.end(): to end connection with API. Rarely used
2. res.redirect(url)
3. res.download(url)

### 3.4 Routing: Chaining
Helps write refactored/cleaner code.
app.route('/item').get().put().delete();