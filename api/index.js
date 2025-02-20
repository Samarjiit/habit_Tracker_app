const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()
const port = 3000

const cors = require("cors")
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose
  .connect("mongodb+srv://samar:samar@cluster0.semhc1g.mongodb.net/")
  .then(() => {
    console.log("connected to mongodb")
  })
  .catch((error) => {
    console.log("error occured at connection", error)
  })

app.listen(port, () => {
  console.log("server running on port 3000")
})
