/*
  This file is responsible for requiring your express server and then binding it to the desired port
*/

const server = require('./server');

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on localhost:${PORT}`);
});
