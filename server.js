const express = require('express')
const app = express()
const webpack = require('webpack')
const path = require('path')

let environment
switch (process.env.NODE_ENV) {
	case 'local':
    environment = 'local'
    break;
  case 'staging':
    environment = 'staging'
    break;
  case 'production':
    environment = 'production'
    break;
  default: 
  	environment = 'local'
}

app.use('/', express.static(environment));

app.use((req, res) => {
  res.sendFile(__dirname + '/' + environment + '/index.html');
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Boilerplate listening on port 8080');
});
