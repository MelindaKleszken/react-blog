//import necessary files
require('./db/connection');
const express = require('express');
const cors = require("cors");
const {postRouter} = require("./routes/post");
const {userRouter} = require("./routes/user");

const port = process.env.PORT || 3000 || 5000;
const app = express();

//transform to JSON the result
app.use(express.json());
//use CORS
app.use(cors());

app.use(userRouter);
app.use(postRouter);

//listen to port
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});