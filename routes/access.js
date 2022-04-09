const express = require("express")
const access = require('../data')
const router  = express.Router()

router.post("/login", (req, res) => {
  const {username, password} = req.body
  const checkPerson = access.find((person) => person.password === String(password))
  
  if (!checkPerson || checkPerson.username !== username) {
    return res.status(401).json({success: false, errorMsg: "not authorized"})
  }
  res.send(`<b>welcome ${checkPerson.firstName}</b>`)
})

module.exports = router