var express = require('express');

var app = express();

var nextId = 1;

app.listen(3000, () => {

});

var grades = [];

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  res.status(201).json(req.body);
  grades.push(req.body);
  nextId++;
});
