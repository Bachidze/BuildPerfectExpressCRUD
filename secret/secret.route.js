const { Router } = require("express")


const secretRouter = Router()

secretRouter.get("/", (req, res) => {
    console.log(req.headers);
    const apiKey = req.headers["api-key"];
    if (!apiKey || apiKey !== "12345") {
      return res.status(403).json({ message: "UnAuth", data: null });
    }
    res.send("secret info");
  });
  



module.exports = secretRouter