var path = require('path')
const express = require('express')
const app = express()
const port = 3000


app.use('/_static', express.static(__dirname + '/doc/_static'));
app.use('/', express.static(__dirname + '/doc'));



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})