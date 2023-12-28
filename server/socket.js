const io = require("socket.io")(8900, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Map to store connected clients
const connectedClients = new Map();

// Socket.io server logic
io.on("connection", (socket) => {
  // Access the query parameters from the client connection
  const clientId = socket.handshake.query.clientId;
  console.log(`Client with ID ${clientId} connected`);

  // Store the socket connection in the map
  connectedClients.set(clientId, socket);

  // Handle socket.io connection close
  socket.on("disconnect", () => {
    console.log(`Client with ID ${clientId} disconnected`);
    // Remove the socket connection from the map when a client disconnects
    connectedClients.delete(clientId);
  });
});

// Function to send a message to a specific client
const sendMessageToClient = (clientId, status) => {
  const clientSocket = connectedClients.get(clientId);
  if (clientSocket) {
    clientSocket.emit("paymentStatus", status);
  }
};

module.exports = {
  sendMessageToClient,
};
