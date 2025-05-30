var express= require("express");    
var router=express.Router();

var quiz1Controller=require("../controllers/quiz3Controller");

router.post("/inserirPontuacao", function(req, res){
    quiz1Controller.inserir(req, res);
});

module.exports=router;