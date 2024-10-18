var socket = io();

let btn = document.getElementById("btn");
let inputMsg = document.getElementById("newmsg");
let msgList = document.getElementById("msglist");

btn.onclick = function exec() {
  // Emit the message with socket.io
  socket.emit("msg_send", {
    msg: inputMsg.value,
  });
};

// Listen for the 'msg_received' event and append the message to the list
socket.on("msg_received", (data) => {
  console.log("hello");
  let limsg = document.createElement("li");
  limsg.innerText = data.msg;
  msgList.appendChild(limsg);
});
