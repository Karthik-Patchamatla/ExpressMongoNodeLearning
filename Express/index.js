const express = require('express');
const app = express();

let port = 3000;
app.listen(port, () => {
    console.log(`the server is running on port ${port}`);
});


app.get("/search", (req,res)=>{
    console.log(req.query);
    let {q} = req.query;
    res.send(`Hello ${q}`);
});