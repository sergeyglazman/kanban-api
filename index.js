const express = require('express')
const routes = require("./routes");
const bodyParser = require("./bodyParser");
const dbConnection = require("./dbConnection");
const cors = require("./cors");

const app = express()
const PORT = process.env.PORT || 5000;

dbConnection();
bodyParser(app);
cors(app);
routes(app);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})


//mongodb+srv://Sergey:6Afe3f2739!@cluster0.ojq9p.mongodb.net/kanban?retryWrites=true&w=majority