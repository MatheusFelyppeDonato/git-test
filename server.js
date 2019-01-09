  const express = require('express');
  const app = express();

  app.get('/', (req, res) => {
  	res.status(200).send({ message: 'Hello world, I`m working'});
  })

  app.get('/ola', (req, res) => {
  res.status(200).send({ message: 'Hello, I am Olá`s rote'});
  })

  app.listen(3001,  () => {
  	console.log('Api is roaming on 3001`s door');
  })
