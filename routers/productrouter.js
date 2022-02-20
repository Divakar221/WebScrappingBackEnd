var express= require("express");
var router= express.Router();
const productrouter=require("../modules/productmodule")

module.exports=router.get("/getproducts",productrouter.product)
module.exports=router.post("/postproduct",productrouter.postproduct)

module.exports=router.get("/get",productrouter.get)