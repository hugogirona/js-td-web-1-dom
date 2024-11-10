// 02-DOM : PARCOUREZ LE DOM

/*
SOURCE :
- https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/3501886-parcourez-le-dom
- https://github.com/oc-courses/javascript-web
*/

// A. SÉLECTIONNER DES ÉLÉMENTS

// 1. Les limites du parcours du DOM nœud par nœud
/*
EXERCICE 1 : sélectionner le titre "Merveilles du monde antique"
de notre page web en utilisant la propriété childNodes
(Aide : il s'agit du deuxième nœud enfant du sixième nœud enfant du nœud body)
*/

// 2. Sélection d'éléments selon leur balise
/*
EXERCICE 2 :
- Sélectionner le titre "Merveilles du monde antique" de notre page web
en utilisant la méthode getElementsByTagName()
(Aide : il s'agit du premier titre h2 du document)
- Afficher le nombre de titres h2 dans le document
*/
const premierH2 = document.querySelector('h2:first-child');
console.log(premierH2.textContent);


// 3. Sélection d'éléments selon leur classe
/* EXERCICE 3 :
- Sélectionner et afficher (à l'aide d'une boucle)
l'ensemble des éléments du document ayant pour classe "merveilles"
*/

const merveilles = document.querySelectorAll('.merveilles');
for (const merveille of merveilles) {
    console.log(merveille);
}


// 4. Sélection d'un élément selon son identifiant
/* EXERCICE 4 :
- Sélectionner et afficher l'élément du document portant l'identifiant "nouvelles"
*/
console.log(document.querySelector('#nouvelles'));


// 5. Chaînage de méthodes
/* EXERCICE 5 :
- Sélectionner et afficher, en enchaînant les méthodes getElementById() et getElementsByClassName(),
	le nombre d'enfants de l'élément d'id "antiques" ayant la classe "existe" 
- Afficher l'enfant en question
*/
// Affiche le nombre d'enfants de l'élément d'identifiant "antiques" ayant la classe "existe"

const antiquesElement = document.getElementById("antiques");


const enfantsAvecClasse = antiquesElement.querySelectorAll(".existe");




// Affiche l'enfant de l'élément d'id "antiques" ayant la classe "existe"
console.log(enfantsAvecClasse.length);



// 6. Sélection d'éléments à partir d'un sélecteur CSS

// 6. a) La méthode querySelectorAll()
/*
La méthode querySelectorAll() permet de rechercher des éléments du DOM
en définissant un sélecteur identique à celui qu'on utiliserait dans une feuille de style CSS.
Elle renvoie la liste des éléments correspondant au sélecteur passé en paramètre.
*/

/* EXERCICE 6a : Sélectionner et afficher, grâce à la méthode querySelectorAll(),
- Le nombre de paragraphes du document
- Le premier paragraphe du document
- Le nombre de paragraphes à l'intérieur de l'élément d'id "contenu"
- Le 2e paragraphe à l'intérieur de l'élément d'id "contenu"
- Le nombre d'éléments ayant la classe "existe"
- Tous les éléments ayant la classe "existe" (à l'aide d'une boucle)
- Le nombre d'enfants de l'élément d'id "antiques" ayant la classe "existe"
*/

// Nombre de paragraphes
console.log(document.querySelectorAll('p').length);

// Le premier paragraphe
console.log(document.querySelectorAll('p')[0]);

// Nombre de paragraphes à l'intérieur de l'élément d'id "contenu"
console.log(document.getElementById('contenu').querySelectorAll('p').length);

// Le 2e paragraphe à l'intérieur de l'élément d'id "contenu"
console.log(document.getElementById('contenu').querySelector('p:nth-child(2)'));

// Nombre d'éléments ayant la classe "existe"
console.log(document.querySelectorAll(".existe").length);

// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll(".existe"));



// Nombre d'enfants de l'élément d'id "antiques" ayant la classe "existe"
console.log(document.getElementById('antiques').querySelectorAll(".existe").length)
// 6. b) La méthode querySelector()
/*
La méthode querySelector() fonctionne comme querySelectorAll(), mais elle renvoie uniquement le PREMIER élément correspondant au sélecteur passé en paramètre.﻿﻿
*/
/* EXERCICE 6b : Sélectionner et afficher, grâce à la méthode querySelector(),
- Le premier paragraphe du document
- Le premier (et seul) enfant de l'élément d'id "antiques" ayant la classe "existe"
*/

// Le premier paragraphe du document
console.log(document.querySelector('p'));

// Le premier (et seul) enfant de l'élément d'id "antiques" ayant la classe "existe"
console.log(document.getElementById('antiques').querySelector('.existe'));

/***********************************************
 **********/

// B. OBTENIR DES INFORMATIONS SUR LES ÉLÉMENTS

// 1. Le contenu HTML
/*
La propriété innerHTML permet de récupérer tout le contenu HTML d'un élément du DOM. 
*/
/* EXERCICE 7 : Afficher dans la console
- Le contenu HTML de l'élément identifié par "contenu"
- Le contenu HTML de l'ul qui n'a pas la classe "merveilles"
*/

// Le contenu HTML de l'élément identifié par "contenu"
console.log(document.getElementById('contenu').innerHTML);

// Le contenu HTML de l'ul qui n'a pas la classe "merveilles"

console.log(document.querySelector('ul:not(.merveilles)').innerHTML);

// 2. Le contenu textuel
/*
La propriété textContent renvoie tout le contenu textuel d'un élément du DOM, sans le balisage HTML.﻿﻿ 
*/
/* EXERCICE 8 : Afficher dans la console
- Le contenu textuel de l'élément identifié par "contenu"
- Le libellé du lien qui pointe vers https://fr.wikipedia.org/wiki/Sept_merveilles_du_monde 
*/

// Le contenu textuel de l'élément identifié par "contenu"
console.log(document.getElementById('contenu').textContent);


// 3. Les attributs
/*
- La méthode getAttribute() peut être appliquée à un élément du DOM et renvoie la valeur de l'attribut passé en paramètre.﻿ ;
- Les attributs sont aussi directement accessibles sous la forme de propriétés ;
- On peut vérifier la présence d'un attribut sur un élément grâce à la méthode hasAttribute().
*/
/* EXERCICE 9 : Afficher dans la console
- L'attribut href du premier lien avec la méthode getAttribute()
- L'identifiant de la première liste (avec l'autre méthode)
- L'attribut href du premier lien (avec l'autre méthode)
- Vérifier, grâce à la méthode hasAttribute(), la présence de l'attribut target sur le premier lien du document 
*/
// Affiche l'attribut href du premier lien
console.log(document.querySelector('a').getAttribute('href'));

// Affiche l'identifiant de la première liste
console.log(document.querySelector('ul').getAttribute('id'));

// Vérifie la présence de l'attribut target sur le premier lien
console.log(document.querySelector('a').getAttribute('target'));



// 4. Les classes
/*
- La propriéte classList (https://developer.mozilla.org/fr/docs/Web/API/Element/classList)
	* permet de récupérer la liste des classes d'un élément du DOM.
	* elle s'utilise comme un tableau.
- On peut aussi tester la présence d'une classe dans un élément en appelant la méthode contains() sur la liste des classes.﻿﻿﻿
*/
/* EXERCICE 10 : Afficher dans la console
- Le nombre de classes que possède l'élément d'id "antiques"
- La première classe que possède l'élément d'id "antiques"
- Le message "L'élément d'id antiques possède / ne possède pas la classe merveille" selon que c'est le cas ou pas
	(Aide : tester s'il possède bien cette classe grâce à la méthode contains())
*/

// Liste des classes de l'élément identifié par "antiques"
console.log(document.querySelector('#antiques').classList);

// Affiche le nombre de classes que possède l'élément d'id "antiques"
console.log(document.querySelector('#antiques').classList.length);

// Affiche la première classe que possède l'élément d'id "antiques"
console.log(document.querySelector('#antiques').className);

// Teste si l'élément d'id "antiques" possède la classe "merveille"

const element = document.getElementById("antiques");


if (element && element.classList.contains("merveille")) {
    console.log("L'élément possède la classe 'merveille'.");
} else {
    console.log("L'élément ne possède pas la classe 'merveille'.");
}
