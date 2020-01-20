var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 6969;

// eslint-disable-next-line no-console
server.listen(port, () => console.log("Server running in port " + port));

const data = {
  listNew: [
    'về nhà ăn tết',
  ],
  listInprogress: [
    'làm việc',
  ],
  listDone: [
    'đi ngủ',
  ],
};

io.on("connection", function(socket) {
  const dataServer = data;
  // eslint-disable-next-line no-console
  console.log(socket.id + ": connected");
  socket.on("disconnect", function() {
    // eslint-disable-next-line no-console
    console.log(socket.id + ": disconnected");
  });
  io.sockets.emit("getData", dataServer);
  // socket.on("updateData", data => {
  //   io.emit("sendData", {dataBoard: data.dataBoard})
  // });

});

app.get("/", (req, res) => {
  res.send("Game on!!!");
});
