const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
const authentication_controller = require('./authentication/authentication.controller');

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;
app.use(express.json())
app.use(cors());


app.post('/authentification/login', authentication_controller.login);
app.post('/authentification/register', authentication_controller.register);
app.get('/authentification/profile', authentication_controller.profile);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});