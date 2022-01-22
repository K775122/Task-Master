const express = require('express');
const routes = require('./controllers/routes')
const mongoose = require("mongoose")
const uri = require("./configs/mongoUrl")
const app = express();
const Port = 3000;
app.set('view engine' , 'ejs');
app.set('views' ,__dirname + '/views');
app.use("/", express.static('static'))

app.use(express.urlencoded())
mongoose.connect(uri, {useNewUrlParser : true, useUnifiedTopology: true}).then(()=>console.log("connected"))
app.use(routes)
app.listen(Port, ()=>{
    console.log('Server is on');
    
});
