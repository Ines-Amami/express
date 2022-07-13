const express = require("express");
var path = require('path');
const hours = require("./middlewares/hours.js");
const app = express();
app.use(hours)
app.use(express.static(path.join(__dirname, 'public')))
app.get("/", (req, res) => {
    res.sendFile("./pages/home.html",{root:__dirname})
  })
  app.get("/about", (req, res) => {
    res.sendFile("./pages/about.html",{root:__dirname})
  })
  app.get("/contact", (req, res) => {
    res.sendFile("./pages/contact.html",{root:__dirname})
  })
  app.get("/service", (req, res) => {
    res.sendFile("./pages/service.html",{root:__dirname})
  })
  const port =process.env.PORT||5000
  app.listen(port,(err)=>{
      err?console.log(err):console.log(`server is running at port ${port}`)
  })