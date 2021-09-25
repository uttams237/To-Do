const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var itemArray= ["buy food","cook food","eat food"]
const port = 3000;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/", function (req, res) {
    today = new Date();
    var option = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    var day = today.toLocaleDateString("en-US", option);

    res.render("index", {
        today: day,
        newItem:itemArray
    });
});

app.post("/", function (req, res) {
    itemArray.push(req.body.newItem)
    res.redirect("/")
});

app.listen(process.env.PORT||port, function () {
    // console.log(`port is running and up on localhost:${port}`);
});
