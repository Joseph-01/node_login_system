const express = require("express")
const accessRoute = require("./routes/access")

const app = express()
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }))
app.use("/", accessRoute)



app.listen(3000, () => {
  console.log("http://localhost:3000")
})