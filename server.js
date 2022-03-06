const express = require('express');
const dotenv = require('dotenv');

const server = express();
dotenv.config('./.env');



server.listen(process.env.PORT, () => console.log(`Your server is now running on port ${process.env.PORT}`));