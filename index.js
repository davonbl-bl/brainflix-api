//boilerplate
const express= require("express");
const cors = require("cors");
const app = express(); 
const PORT = 8070;

app.use(cors());
app.use(express.json());
app.use(express.static('public'))

const videoRoutes = require('./routes/videos'); 
app.use('/videos', videoRoutes);

//point to public folder, get 2 default images



//this is the default for testing 
app.get("/", (req, res) => {
    res.send("Testing"); 
})

app.listen(8070, () => {
    console.log('Server stated on http://localhost:8070');
    console.log("Press CTRL + C to stop server"); 
})