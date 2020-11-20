const express = require("express");
const app = express();
const cors = require("cors")

const port = process.env.PORT || 3030;


app.use(cors())
app.get("/", (req,res)=>{
    res.send({
        "sample_key":"sample_value"
    })
})


app.listen(port,()=>{ 
    console.log("Listening on "+port);
})