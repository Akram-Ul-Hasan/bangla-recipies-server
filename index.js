const express = require('express');
const app = express();
const port = process.env.PORT || 5000; 

app.get('/', (req, res) => {
  res.send('Bangla Recipes server is running.')
})
app.listen(port, () => {
  console.log(`Bangla Reciped API is running on port: ${port}`)
})

