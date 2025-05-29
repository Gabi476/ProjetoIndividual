var express= require("express");    
var router=express.Router();

var quiz1Controller=require("../controllers/quiz1Controller");

router.post("/salvarquiz", function(req, res){
    quiz1Controller.salvarquiz(req, res);
});

module.exports=router;