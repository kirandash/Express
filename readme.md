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
1. npm start - start server
2. rs - restart server

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

## 4 Middleware with Express
### 4.1 Basic middleware with Express
Middleware: Functions that Has access to req, res object in our express app.
http://expressjs.com/en/guide/using-middleware.html

### 4.2 Built-in middleware (express.json() and express.urlencoded())
1. express.static()
Most types of data: json and urlencoded
JSON data
{"hello":"JSON data is cool"}
URL Encoded data
hello = URLEncoded+data+is+cool
2. express.json(): Allows to use JSON in data
3. express.urlencoded({extended: true}); Allows use of urlencoded data. extended: true means stringify method is of type ps
In postman, while testing change header: content-type to application/json or application/x-www-form-urlencoded and body as raw or urlencoded

### 4.3 Error-handling middleware
1. throw new Error(); // manually creating error 
2. app.use((err, req, res, next) 
3. err.stack
Always keep error handling code in the end before app.listen