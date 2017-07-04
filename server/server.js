const express = require("express")
const app = express()

app.get('/*', function(req, res) {
  res.send("YasdasdO")
})

app.listen(3001, function() {
  console.log("Listening on 3001")
})
