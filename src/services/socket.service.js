import io from "socket.io-client";

export const SOCKET_ADD_CODE = "SOCKET_ADD_CODE";
export const SOCKET_SEND_CODE = "SOCKET_SEND_CODE";

const baseUrl = process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";
export const socketService = createSocketService();

window.socketService = socketService;

socketService.setup();

function createSocketService() {
  var socket = null;

  const socketService = {
    setup() {
      socket = io(baseUrl);
    },
    on(eventName, cb) {
      socket.on(eventName, cb);
    },
    off(eventName, cb) {
      socket.off(eventName, cb);
    },
    emit(eventName, data) {
      socket.emit(eventName, data);
    },
    terminate() {
      socket = null;
    },
  };

  return socketService;
}
