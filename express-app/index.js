// Entry point of our project
import express from "express";

const app = express();
const PORT = "3000";

app.listen(PORT, () => {
    console.log(`The application has been started on port: ${PORT}`);
});