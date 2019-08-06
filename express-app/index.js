// Entry point of our project
import express from "express";
import data from './data/data.json';

const app = express();
const PORT = "3000";

// Basic route to path / with req as GET and res to add to body
app.get('/', (req, res) => {
    res.send(`A get request with / route on port ${PORT}`); // Response being sent to route
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
    console.log(data); // Logged in command line console. Since these are being done on the server not on the frontend
});