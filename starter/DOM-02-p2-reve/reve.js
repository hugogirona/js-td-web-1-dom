// 02-DOM : PARCOUREZ LE DOM
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
 DOM - PREPA 2 : « Rêve » : compter les éléments.
 Déclarez la fonction compterElements afin que le reste du programme fonctionne correctement.
*/

// Insérez votre code ici
console.log(document.querySelectorAll('p').length);


function compterElements(element){
    document.querySelectorAll(element).length;
    return element.length
}


console.log(compterElements('p')); // Doit afficher 4
console.log(compterElements('.adjectif')); // Doit afficher 3
console.log(compterElements('p .adjectif')); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2