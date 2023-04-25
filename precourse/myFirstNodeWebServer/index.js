const express = require('express')
const app = express();
app.get('/greet/:name', (req,res) => {
    res.send('Welcome to Salt,' +req.params.name)
});
app.listen(3000);
console.log(`Open htttp://localhost:3000/greet/Marcus`)