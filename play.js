// establishes a connection with the game server

const { connect } = require('./client');

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = process.stdin.on('data', (key) => {
    if (key === '/u0003')
    process.exit();
  })
  
  return stdin;
};


console.log("Connecting ...");
connect();