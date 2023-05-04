const express = require('express');
const app = express();
const port = process.env.PORT || 5000; 

const chefs = require('./data/chefs.json');

app.get('/', (req, res) => {
  res.send('Bangla Recipes server is running.')
})

app.get('/chefs', (req, res) => {
  res.send(chefs);
}) 

app.get('/chef/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const selectedChef = chefs.find(n => parseInt(n.id) === id);
  res.send(selectedChef);
}) 


app.listen(port, () => {
  console.log(`Bangla Reciped API is running on port: ${port}`)
})