const express       = require("express")
const mongoose      = require("mongoose")
const app           = express()
const AuthRouter    = require('./servers/Routes/AunthRouter')
const cookieParser  = require("cookie-parser")

app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', AuthRouter)

mongoose.connect("mongodb://127.0.0.1:27017/MemoryCollector").then(() => {
    app.listen(5000)
    console.log("MongoDB is Connected and Listening on the port 5000")
})
.catch((err) => console.log(err))