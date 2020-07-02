const express = require('express');
const app = express();

app.use(express.json());
const arr = [];


app.get('/list', (req, res) => {
    return res.json(arr);
});

app.post('/create', (req, res) => {
    const { name } = req.body;
    arr.push(name);
    return res.json(arr);

})

app.put('/update/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    arr[index] = name;
    return res.json(arr);

});

app.delete('/delete/:index', (req, res) => {
    const { index } = req.params;

    arr.splice(index, 1);
    return res.json(arr);
})

app.listen(3000);