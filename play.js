const net = require("net");

// establishes a connection with the game server
const connect = function () {
  
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("end", () => {
    console.log('thanks for playing');
  })

  return conn;
};

console.log("Connecting ...");
connect();