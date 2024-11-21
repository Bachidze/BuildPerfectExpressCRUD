const express = require("express");
const app = express();
const corse = require("cors");
const apiRouter = require("./api/main");
const secretRouter = require("./secret/secret.route");
const { logger } = require("./middlewares/logger.middleware");
const userAgentMiddleware = require("./middlewares/user-agent.middleware");
const PORT = 3001;
app.use(corse());
app.use(express.json());
app.use(logger,userAgentMiddleware)



app.use("/api",apiRouter)
app.use("/secret",secretRouter)


app.get("/", (req, res) => {
  res.send("Hello world");
});



app.get("/shop/:category/:id", (req, res) => {
  console.log(req.params);
  res.send("shop");
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
