let compteur = 0; 
let bingo = 0;
let score = 0; 
let tabImages = [];
let tabImagesId = [];
let image2Index;

let tabImagesSource = ["images/animaux/faune-vie-sauvage.jpeg", "images/animaux/lion.jpeg", "images/animaux/bouledogue.jpeg", 
    "images/animaux/chat-calico.jpeg","images/animaux/chat-tigre-orange.jpeg","images/animaux/cheval-blanc.jpeg",
    "images/animaux/tortues.jpeg","images/animaux/ecureuil.jpeg","images/animaux/girafe-majestueuse.jpeg",
    "images/animaux/chouette-effraie.jpeg","images/animaux/clairiere.jpeg","images/animaux/dindes.jpeg",
    "images/animaux/tortues.jpeg","images/animaux/ecureuil.jpeg","images/animaux/girafe-majestueuse.jpeg",
    "images/animaux/chouette-effraie.jpeg","images/animaux/clairiere.jpeg","images/animaux/dindes.jpeg",
    "images/animaux/faune-vie-sauvage.jpeg", "images/animaux/lion.jpeg", "images/animaux/bouledogue.jpeg", 
    "images/animaux/trois-loups.jpeg","images/animaux/flamants-roses.jpeg","images/animaux/faune.jpeg",
    "images/animaux/chat-calico.jpeg","images/animaux/chat-tigre-orange.jpeg","images/animaux/cheval-blanc.jpeg",
    "images/animaux/trois-loups.jpeg","images/animaux/flamants-roses.jpeg","images/animaux/faune.jpeg"];


// setTimeout(changeImage, 1500);

init();

for (let index = 0; index < 30; index++) {
    const image = document.createElement("img");
    image.id = "image_" + index;
    image.src = "images/interrogation.jpg";
    document.getElementById("imageZone").appendChild(image);
    image.addEventListener("click", changeImage);
}

function changeImage() {
    //avec event récupération de l'image cliquée
    //ensuite changer la src
    let imageId = this.id;
    tabImagesId[compteur] = imageId;
    let numero = imageId.split("_");
    let index = numero[1];
    console.log(imageId);
    console.log(index);
    
    let imageClick = document.getElementById(imageId);
    imageClick.src = tabImages[index];

    for (let i =0; i < tabImages.length; i++) {
        if ((i.toString() !== index) && (tabImages[index] == tabImages[i]))
        {        
            image2Index = i;
            break;
        }
    }
    
    let image2Id = "image_"+image2Index;
    console.log(image2Index);
    console.log(image2Id);
    console.log(compteur);   

    if (compteur !==1 && (tabImagesId[compteur-1] == image2Id))
    {
        let image = document.getElementById(image2Id);
        image.src = tabImages[image2Index];
        image.removeEventListener("click", changeImage);
        imageClick.removeEventListener("click", changeImage);
        bingo ++;
        console.log(bingo);
        compteur ++;
        if (bingo >= 15)
        {
            score = 2000 - compteur*10;
            setTimeout(() => {alert(score);}, 1000);
            
            return score;
        }
    }
    else 
    {
        setTimeout(() => {imageClick.src = 'images/interrogation.jpg'}, 1000);
        compteur ++;
    }
}

function init() {
    let set_entiers = new Set();

    while (set_entiers.size < 30) {
    
        let entier = Math.floor(Math.random() * 30);
        set_entiers.add(entier);
    }
    console.log(set_entiers);

    let index = 0;
    for (let item of set_entiers) {
        tabImages[index] = tabImagesSource[item];
        index++;
    }
}

