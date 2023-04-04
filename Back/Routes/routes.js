 const express=require('express')
const { createApi, showApi, DeleteApi, editApi, updateApi } = require("../Controller/post")

const router = express.Router()

router.post("/create",createApi)
 

router.get("/show",showApi);


router.delete("/delete/:id",DeleteApi);
router.get("/edit/:id",editApi);
router.put("/update/:id",updateApi);
module.exports=router;