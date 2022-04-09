const express = require("express")
const access = require('../data')
const router  = express.Router()

router.post("/login", (req, res) => {
  const {username, password} = req.body
  //console.log(username, password);
  const checkPerson = access.find((person) => person.password === String(password))
  
  if(!checkPerson) {
    return res.status(401).json({success: false, errorMsg: "not authorized"})
  }
  res.send(`welcome ${username}`)
})

module.exports = router