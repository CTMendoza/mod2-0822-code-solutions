var express = require('express');

var app = express();

var grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

var newArray = [];

var newObject = {};

for (var prop in grades) {
  newObject = grades[prop];
  newArray.push(newObject);
}

app.get('/api/grades', (req, res) => {
  res.json(newArray);
});

app.listen(3000, () => {
});
