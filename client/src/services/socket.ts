const WS_URL = "ws://localhost:8080/ws"; // Изменили путь

export const socket = new WebSocket(WS_URL);

socket.onopen = () => {
  console.log("✅ Connected to WebSocket");
};

socket.onerror = (error) => {
  console.error("❌ WebSocket Error:", error);
};

socket.onclose = () => {
  console.warn("⚠️ WebSocket connection closed");
};
