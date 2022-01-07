const express = require("express");
const app = express();
const cors = require("cors");

const inviteeRouter = require("./routes/inviteeRouter");

const connectDB = require("./connect"); //  not working with await!!!
require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json());

app.use("/invitees", inviteeRouter);

const uri = process.env.MONGO_URI;
const port = 3000;

// const connectDB = (url) => {
//   //returns a promise
//   return mongoose.connect(url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   });
// };

const start = async () => {
  try {
    await connectDB(uri);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
