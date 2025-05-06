
let userLocal = localStorage.getItem("sophie.tremblay77@fauxmail.org");
console.log(userLocal);



let user = JSON.parse(userLocal)
console.log(user);
console.log(user.password);

