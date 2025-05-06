function init() {

    const form = document.querySelector("form");
    form.addEventListener("submit",login);
}

init();

function authentification(user) {

    let loginUser = localStorage.getItem(user.email);
    let localUser = JSON.parse(loginUser);

    if (loginUser == null)
        {
            alert("Adresse mail non valide, veuillez resaisir !");
            return false;
        }
    else if (user.password == localUser.password)
        return true;

    else if (user.password !== localUser.password)
        {
            alert("Mot de passe incorrecte, veuillez resaisir !");
            return false;
        }
    alert("ERREUR!");
}

function login(event) {
    event.preventDefault();
    const user = {};
    user.email = document.getElementById("email").value;
    user.password = document.getElementById("mdp").value;

    console.log(user);

    if(authentification(user)) {
        console.log("login validé !");
        document.location.href="http://127.0.0.1:5500/profile.html";
        return true;
    }
    else 
    console.log("On ne peut pas vous laisser vous connecter, tant pis !");
    
}
