const express = require('express');
const db = require('./conn');
const app = express();
const port = process.env.port || 3000;
db.connect();
app.use(express.json());

const userRouter = require('./routes/user');
app.use('/users', userRouter);

app.listen(port, ()=>{console.log("Server started")})