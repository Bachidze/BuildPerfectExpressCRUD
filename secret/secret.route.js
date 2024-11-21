const { Router } = require("express");
const isValidApiKeyMiddleware = require("../middlewares/isValidApiKey.middleware");


const secretRouter = Router()

secretRouter.get("/", isValidApiKeyMiddleware ,(req,res) => {
  console.log(req.header, "request")
  res.send("Secret Info")
} );
  



module.exports = secretRouter