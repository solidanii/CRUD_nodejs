const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3203;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//bring our router for the api route we created in /all
const apiroutes = require("./route/apiroutes");
//now we will use it to make a request(get,post,put,delete)
app.use("/api", apiroutes);

//setup server
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('listening on: http://localhost:${PORT}');
    });
});