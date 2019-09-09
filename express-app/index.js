// Entry point of our project
import express from "express";
import data from './data/data.json';

const app = express();
const PORT = "3000";

// This is for the public folder but on path /, since path is not mentioned and defaulted to '/'
app.use(express.static('public')); // Add a static route for file serving

// This is for images folder and on path images
app.use('/app-images', express.static('images'));

// Basic route to path / with req as GET and res to add to body
app.get('/', (req, res) => {
    // Get data first
    res.json(data); // Send data in response in JSON format
    res.send(`A get request with / route on port ${PORT}`); // Response being sent to route
});

app.get('/item/:id', (req, res) => {
    // console.log(req.params.id);
    let user = Number(req.params.id); // Since id comes as a string
    console.log('user id: ' + user);
    res.send(data[user]); // Sending data from id to client/browser
});

app.post('/newItem', (req, res) => {
    res.send(`A POST request with /newItem route on port ${PORT}`); // Response being sent to route
});

// Update existing item: put
app.put('/item', (req, res) => {
    res.send(`A PUT request with /item route on port ${PORT}`); // Response being sent to route
});

app.delete('/item', (req, res) => {
    res.send(`A DELETE request with /item route on port ${PORT}`); // Response being sent to route
});

app.listen(PORT, () => {
    console.log(`The application has been started on port: ${PORT}`);
    // console.log(data); // Logged in command line console. Since these are being done on the server not on the frontend
});