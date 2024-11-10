// 02-DOM : PARCOUREZ LE DOM
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/
/*
 DOM - PREPA 3 : « Instruments » : attributs et classes
- Créez une fonction getInfosLiens qui doit afficher :
    - le nombre total de liens dans la page web ;
    - la cible du premier et du dernier lien.
    N.B. Cette fonction doit afficher un résultat correct, quel que soit le nombre de liens présents dans la page.
- Ajoutez un nouvel instrument à la page web, puis vérifiez le nouveau résultat de votre programme.
    <li id="clavecin" class="cordes pincees">
        Le <a href="https://fr.wikipedia.org/wiki/Clavecin">clavecin</a>
    </li>
- Écrivez la fonction possede qui vérifie qu'un élément avec un certain id possède une classe
- Testez grâce à cette foncion 
    - si l'élément d'id "saxophone" possède la classe "bois" (doit afficher true)
    - si l'élément d'id "saxophone" possède la classe "cuivre" (doit afficher false)
    - si l'élément d'id "trompette" possède la classe "cuivre" (doit afficher true)
    - si l'élément d'id "contrebasse" possède la classe "cordes" (doit afficher "Aucun élément ne possède l'id contrebasse")
*/

function getInfosLiens() {
    console.log("Nombre total de liens :", document.querySelectorAll("a").length);
    console.log("Première cible :", document.querySelector("li:first-child").querySelector('a').href);
    console.log("Première cible :", document.querySelector("li:last-child").querySelector('a').href);
}

getInfosLiens()

function possede (id, classe) {
    const element = document.getElementById(id);
    if(!element){
        console.log(`Aucun élément ne possède l'id ${id}`);
        return;
    }

    const gotClass = element.classList.contains(classe);
    console.log(gotClass);
}

possede("saxophone", "bois");
possede("saxophone", "cuivre");
possede("trompette", "cuivre");
possede("contrebasse", "cordes");
