const users = [];

const addUser = ({ id, username, room }) => {
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();
  if (!username || !room) {
    return {
      error: "Username and room are required",
    };
  }

  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  if (existingUser) {
    return {
      error: "Username is in use!",
    };
  }
  const user = { id, username, room };
  users.push(user);
  //console.log(users);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id;
  });
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  //room = room.trim().toLowerCase();
  return users.filter((user) => {
    //console.log(user.room, room, user.room === room);
    return user.room === room;
  });
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};

// addUser({ id: 22, username: "maka", room: "room1" });
// addUser({ id: 23, username: "chris", room: "room1" });
// addUser({ id: 26, username: "john", room: "room2" });

// console.log(getUser(22));
// const userlist = getUsersInRoom("room1");
// console.log(userlist);
