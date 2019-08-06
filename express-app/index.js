// Entry point of our project
import express from "express";
import data from './data/data.json';

const app = express();
const PORT = "3000";

app.listen(PORT, () => {
    console.log(`The application has been started on port: ${PORT}`);
    console.log(data); // Logged in command line console. Since these are being done on the server not on the frontend
});