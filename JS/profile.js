
let loginUser = sessionStorage.getItem('user');
console.log(loginUser);

let currentUser = JSON.parse(loginUser);
console.log(currentUser.nom);

document.getElementById("nom").innerHTML = currentUser.nom;
document.getElementById("email").innerHTML = currentUser.email;
document.getElementById("choix_memory").innerHTML = "Choix de memory à remplir";
document.getElementById("score").innerHTML = "Score à afficher";

