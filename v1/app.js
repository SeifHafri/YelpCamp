var express = require('express');
var ejs = require('ejs');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: true}));

var campgrounds = [
    {name: "Salmon Creek", image: "https://i.picsum.photos/id/777/200/300.jpg?hmac=eJq2XzCPCPppgoS96ReNEmweR3Wloh4ZsbWIgec36Uo"},
    {name: "Granite Hill", image: "https://i.picsum.photos/id/777/200/300.jpg?hmac=eJq2XzCPCPppgoS96ReNEmweR3Wloh4ZsbWIgec36Uo"},
    {name: "Mountain Goat's Rest", image: "https://i.picsum.photos/id/777/200/300.jpg?hmac=eJq2XzCPCPppgoS96ReNEmweR3Wloh4ZsbWIgec36Uo"}
];

app.get("/",function(req, res) {
    res.render("landing");

});

app.post("/campgrounds",function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");   
    
  });

app.get("/campgrounds",function(req,res){
    
    res.render("campgrounds",{campgrounds:campgrounds});
})



app.get("/campgrounds/new",function(req,res){
    res.render("new.ejs");
});

app.listen(3000,function(){
    console.log('Server is running on port 3000');
});