const express = require("express");
const connectDB = require("./db/connect");
var cors = require("cors");
const Task = require("./routes/task");
const port =  5000;
const app = express();
const dotenv = require("dotenv");
const notFound = require("./middleware/not-found");
dotenv.config();

app.use(cors())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
      req.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, PATCH, GET');
      return res.status(200).json({});
    }
   return next();
 })

 app.use(express.json())
 app.use(express.urlencoded({ extended: false }))

app.use("/api/v1/tasks", Task);

app.use((req, res, next) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  next();
});

app.use(notFound);

const startUp = async () => {
  try {
    await connectDB(process.env.Mongo_URI),
      {
        useNewUrlParser: true,
      };
    app.listen(port , () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (err) {
    res.json(err);
  }
};

startUp();
