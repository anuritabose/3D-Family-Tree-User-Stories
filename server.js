const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () =>
  console.log("MongoDB connection established seccessfully!")
);

const articlesRouter = require("./routes/articles");
app.use("/articles", articlesRouter);

const membersRouter = require("./routes/members");
app.use("/members", membersRouter);


app.listen(port, () => console.log(`The app is running on Port: ${port}`));
