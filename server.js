const express = require('express');
const server = express();



server.listen(process.env.PORT, () => console.log(`Your server is now running on port ${process.env.PORT}`));