const user = {};

console.log(user);

function init() {

    const form = document.querySelector("form");
    form.addEventListener("submit",inscription);
}

init(); 

function verification(user) {
    
    const checkEmail = (email) => {
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regex.test(email)) {
            console.log("Valid email address");
            return true;
        } else {
            console.log("Invalid email address");
        }
    }

    const checkName = (userName) => {
        if (userName.length < 3)
        {
            alert("votre nom d'utilisateur doit contenir 3 caractères minimum.")
            console.log("Invalid userName");
        }
        else 
        {
            console.log("Valid userName");
            return true;
        }
    }
    
    const checkPwd = (pwd) => {
        // logic de validataion Pwd avec regex
        let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
        if (regex.test(pwd)) {
            console.log("Valid password");
            return true;
        } else {
            console.log("Invalid password");
        }
    }
    
    if (checkEmail(user.email) && checkName(user.nom) && checkPwd(user.password))
        return true;
}
  
/**
 * appel lors du submit
 */
function inscription(event) {
    event.preventDefault();
    user.nom = document.getElementById("nom").value;
    user.email = document.getElementById("email").value;
    user.password = document.getElementById("mdp").value;
    console.log(user.nom.length);
    
    if (verification(user)) {
        localStorage.setItem(user.email,JSON.stringify(user));
        console.log("J'ai passé validation,le resultat est "+verification(user));
        document.location.href="http://127.0.0.1:5500/login.html";
    }
    else {
        console.log("J'ai échoué validation,le resultat est "+verification(user));
        alert("Saisi non validée. Veuillez saisir à nouveau !");
        return false;
    }
}

