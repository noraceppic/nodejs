const os =require("os");
const {username} =os.userInfo();
const cpus =os.cpus().length;

console.log(username);
console.log(cpus);