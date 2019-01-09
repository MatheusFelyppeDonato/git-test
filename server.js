  const express = require('express');
  const app = express();

  app.get('/', (req, res) => {
  	res.status(200).send({ message: 'Hello world, I`m working'});
  })

  app.listen(3001,  () => {
  	console.log('Api is roaming on 3001`s door');
  })