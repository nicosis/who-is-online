function whoIsOnline(users) {
  let usersOnline = [];
  // Happy Coding! Puedes modificar solo el cuerpo de esta función

  // con forEach e if
  // users.forEach(element => element.status === "online" ? usersOnline.push(element.username) : null);

  // combinando filter y map
  usersOnline = users
    .filter(user => user.status === "online")
    .map(user => user.username);

  return usersOnline;
}

let friends = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

let workers = [
  {
    username: "Nathan",
    status: "offline",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Joel",
    status: "online",
    lastActivity: 104,
  },
];

console.log(whoIsOnline(friends)); // ["David", "Bob"]
console.log(whoIsOnline(workers)); // ["Joel"]