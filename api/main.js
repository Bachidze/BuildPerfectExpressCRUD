const { Router } = require("express");
const animalsRouter = require("./animals/animals.route");
const usersRouter = require("./users/users.route");
/* const secretRouter = require("../secret/secret.route"); */

const apiRouter = Router();

apiRouter.get("/", (req, res) => {
  res.send("This is APIROUTE");
});

apiRouter.use("/animals",animalsRouter)
apiRouter.use("/users",usersRouter)

module.exports = apiRouter;
