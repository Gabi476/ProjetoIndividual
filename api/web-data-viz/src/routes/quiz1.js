var express= require("express");
var router=express.Router();

var quiz1Controller=require("../controllers/quiz1Controller")

router.post("/salvar", function(req, res){
    quiz1Controller.salvar(req, res);
})

module.exports=router;