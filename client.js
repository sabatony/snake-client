const net = require("net");
const {IP, port} = require('./constants');


const connect = function () {
  
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write("Name: SAB");

    });
  

  conn.on("end", () => {
    console.log('thanks for playing');
  });

  return conn;
};

module.exports = { connect };