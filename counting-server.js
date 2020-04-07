const express = require('express');
const app = express();
const port = 3000;
let count = 0;

app.post('/increment', (req,res) => {
    count ++;
    res.send("The count has increased by 1");
});
app.post('/decrement', (req,res) => {
    count --;
    res.send("The count has decreased by 1");
});

app.get('/value', (req,res) => res.send("The counter is at " + count));

app.listen(port, () => console.log(`Example app listening at http://localhost: ${port}`));