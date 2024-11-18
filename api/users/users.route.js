const {Router} = require("express")


const usersRouter = Router()

const useresObj = {
    id:1,
    name:"Gio",
    age:20
}

usersRouter.get("/",(req,res) => {
res.send(useresObj)
})


module.exports = usersRouter