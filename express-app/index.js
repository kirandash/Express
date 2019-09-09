// Entry point of our project
import express from "express";
import data from './data/data.json';

const app = express();
const PORT = "3000";

// This is for the public folder but on path /, since path is not mentioned and defaulted to '/'
app.use(express.static('public')); // Add a static route for file serving

// Enabling JSON data type for use from DB
// app.use(express.json());
app.use(express.urlencoded({extended: true}));

// This is for images folder and on path images
app.use('/app-images', express.static('images'));

// Basic route to path / with req as GET and res to add to body
app.get('/', (req, res) => {
    // Get data first
    res.json(data); // Send data in response in JSON format
    res.send(`A get request with / route on port ${PORT}`); // Response being sent to route
});

app.get('/imaage-download', (req, res, next) => {
    res.download("images/rocket.jpg"); // Only one res statement at a time
    // res.redirect("https://linkedin.com");
    // res.end(); // End will end api connection here and thus will not execute next block statements
    // res.send('Call to happen in end of this block!');
});

app.get('/item/:id', (req, res, next) => {
    // Middleware to pull the data
    // console.log(req.params.id);
    let user = Number(req.params.id); // Since id comes as a string
    console.log('user id: ' + user);
    console.log(`Request URL is: ${req.originalUrl}`);
    console.log(`Request method/type is: ${req.method}`);
    // everything above the res.send command is middleware
    res.send(data[user]); // Sending data from id to client/browser
    next(); // next helps to execute next code block
}, (req, res) => {
    // since next is being called, this routing handler will also execute but we can not have res.send here since already used in previous block
    console.log('Did you get the right data?');
});

// Types of data we will have to work with while sending data to DB
// JSON data
// {"hello":"JSON data is cool"}
// URL Encoded data
// hello = URLEncoded+data+is+cool
app.post('/newItem', (req, res) => {
    // route handler - content inside a route call
    console.log(req.body);
    res.send(req.body);
    // res.send(`A POST request with /newItem route on port ${PORT}`); // Response being sent to route
});

// Chaining multiple methods 'get', 'put', 'delete' to one Route 'item'
app.route('/item')
    .get((req, res) => {
        res.send(`A chained GET request with /item route on port ${PORT}`); // Response being sent to route
    })
    .put((req, res) => {
        res.send(`A chained PUT request with /item route on port ${PORT}`); // Response being sent to route
    })
    .delete((req, res) => {
        res.send(`A chained DELETE request with /item route on port ${PORT}`);
    });

// Update existing item: put
/*app.put('/item', (req, res) => {
    res.send(`A PUT request with /item route on port ${PORT}`); // Response being sent to route
});*/

/*app.delete('/item', (req, res) => {
    res.send(`A DELETE request with /item route on port ${PORT}`); // Response being sent to route
});*/

app.listen(PORT, () => {
    console.log(`The application has been started on port: ${PORT}`);
    // console.log(data); // Logged in command line console. Since these are being done on the server not on the frontend
});