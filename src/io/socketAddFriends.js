import io from "socket.io-client";

const socketAddFriends = io("/addFriends", {
  // 实际使用中可以在这里传递参数
  query: {
    room: "demo",
    userId: `17865429872`,
  },
});

export default socketAddFriends