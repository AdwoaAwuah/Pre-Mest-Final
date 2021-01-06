const express = require("express");
const config = require("./Server/helpers/config");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
// User own imports
const { authenticateUser } = require("./Server/middlewares/auth");
const authRouter = require("./Server/routers/auth");
const apiRouter = require("./Server/routers/symptomsChecker");
const User = require("./Server/models/user");
const userRouter = require("./Server/routers/userRoute");
const passport = require("./Server/passport");

// Mongoose Connection
mongoose
  .connect(config.MONGODB_URI, config.MONGOOSE_OPTIONS)
  .then(() => {
    console.log(`MONGODB Connection successful`);
  })
  .catch((exception) => {
    console.log("MONGODB Connection failed/n", exception);
  });

const app = express();
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//production
if (config.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Routers
app.use(authRouter);
app.use(apiRouter);
app.use(userRouter);

// Usage of middlewares here
app.use(morgan("default"));
// app.use(authenticateUser);

app.listen(config.PORT, () => {
  console.log(`Server started on PORT: ${config.PORT}`);
});
