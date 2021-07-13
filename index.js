const express = require('express');
const path = require('path')
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/views'));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(port, ()=> console.log('started on ' + port))