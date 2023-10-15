const express = require("express");
const app = express();

const ExpressError = require("./ExpressError");

app.get("/", (req ,res) => {
    res.send()
})

app.get("/err", (req ,res) => {
    abcd = abcd
})

app.use((err, req, res, next) => {
    let {status, message} = err;
    res.status(status).send(message);
});

app.listen(8080, () => {
    console.log("server listening to port 8080");
});