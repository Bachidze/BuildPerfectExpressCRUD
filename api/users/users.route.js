const {Router} = require("express")
const { getAllUsers } = require("./users.service")


const usersRouter = Router()


usersRouter.get("/",getAllUsers)

module.exports = usersRouter