const express = require("express");
const bodyParser = require("body-parser");
const mongoose =  require("mongoose");

var app = express(); 
app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));


mongoose.connect("mongodb://localhost:27017/todo");
const todoList = new mongoose.Schema({
    name: String
});


const item = mongoose.model("task", todoList);
// const todo = new item({
//     name: "DSA"
// });

// todo.save();



// var example = "working";
// var items = [];

async function getItems() {
    const items =  await item.find({});
    return items;
}
app.get("/", function(req, res) {
    
            getItems().then(function(foundItems){
                res.render("list", {ejesItems: foundItems});
            }); 
});

app.post("/", function(req, res) {
    const itemName = req.body.element1;
    const todo1 = new item({
        name: itemName
    });
    todo1.save();
    res.redirect("/");
});

app.post("/delete", function(req, res) {

    async function myDelete(){
        const checked = req.body.checkbox1;
      
        const del = await item.findByIdAndDelete(checked);
      
      };
      myDelete();
      res.redirect("/");

    // item.findByIdAndDelete(checked, function(err) {
    //     if(!err) {
            console.log("Deleted!");
            // res.redirect("/");
    //     }
    // });
});






 app.listen(8000, function(){
    console.log("Server started");
 });