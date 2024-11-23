const express = require("express");
const app = express();
const corse = require("cors");
const apiRouter = require("./api/main");
/* const secretRouter = require("./secret/secret.route"); */
const { logger } = require("./middlewares/logger.middleware");
const userAgentMiddleware = require("./middlewares/user-agent.middleware");
const bodyParser = require("body-parser")
const PORT = 3001;
app.use(express.static("public"))
app.set("view engine","ejs")
app.use(corse());
app.use(bodyParser.json());
app.use(logger,userAgentMiddleware)



app.use("/api",apiRouter)
/* app.use("/secret",secretRouter) */
const users = [
  {
    id:1,
    name:"გიორგი",
    desc:"ეს არის გიორგის აღწერა"
  },
  {
    id:2,
    name:"ნინი",
    desc:"ეს არის ნინის აღწერა"
  },
  {
    id:3,
    name:"ლუკა",
    desc:"ეს არის ლუკას აღწერა"
  },
  {
    id:4,
    name:"მარიამი",
    desc:"ეს არის მარიამის აღწერა"
  },
]



app.get("/", (req, res) => {
  res.render("pages/home.ejs",{users})
});


app.get("/users/:id",(req,res) => {
  const {id} =req.params
  const user = users.find(el => el.id === Number(id))
  res.render("pages/user.ejs",{user})
})


app.get("/shop/:category/:id", (req, res) => {
  console.log(req.params);
  res.send("shop");
});

app.post("/add", (req, res) => {
  const { name, desc } = req.body;
  console.log(name,desc)
  const lastId = users[users.length - 1]?.id || 0;
  const newObj = {
    id: lastId + 1,
    name,
    desc,
  };
  users.push(newObj);
  res.redirect("/"); 
});


app.delete("/:id",(req,res) => {
  const {id} = req.params
  const findIndex = users.findIndex(el => el.id === Number(id))
  if(findIndex === -1){
    return res.status(404).json({message:"Not Found"})
  }
  const deleteUser = users.splice(findIndex,1)
  res.status(200).json({message:"deleted Successfully"})
})

app.get("/add",(req,res) => {
  res.render("pages/add.ejs")
})  

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
