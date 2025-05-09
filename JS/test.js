
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

let set_entiers = new Set();
let tabImages = [];

while (set_entiers.size < 30) {

    let entier = Math.floor(Math.random() * 30);
    set_entiers.add(entier);
}
//console.log(set_entiers);


let index = 0;
for (let item of set_entiers) {
    tabImages[index] = tabImagesSource[item];
    index++
   
}
console.log(tabImages);