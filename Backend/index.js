const express = require("express")
const cors = require('cors');
const connectMongoDB = require("./connection")
const URL = require("./config")
const urlRoute = require("./routes/url")
const userRouter = require("./routes/new_user_route")
const app = express()
const port = 3000

app.use(express.json());
app.use(cors())
app.use("/url", urlRoute)
app.use("/user", userRouter)

connectMongoDB(URL)
    .then(()=>{
        console.log("connected to the database")
        app.listen(port,()=>{
            console.log("Server listening on port", port)
        })
    })