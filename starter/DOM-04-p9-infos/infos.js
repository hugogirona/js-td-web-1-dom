// 04-DOM : DONNEZ DU STYLE À VOS ÉLÉMENTS
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 9 : « Infos » : informations sur un élément
Récupérez la largeur et la hauteur de la section d'id "contenu"
et affichez les deux informations dans une liste
(un item pour la largeur et un item pour la hauteur)
que vous insérez dans la section d'id "infos" après le titre
*/


const contenu = document.getElementById("contenu");

const infos = document.getElementById("infos");

const largeurContenu = contenu.clientWidth;
const hauteurContenu = contenu.clientHeight;

const listeDimensions = document.createElement("ul");

const itemLargeur = document.createElement("li");
itemLargeur.textContent = `Largeur: ${largeurContenu}px`;

const itemHauteur = document.createElement("li");
itemHauteur.textContent = `Hauteur: ${hauteurContenu}px`;

listeDimensions.appendChild(itemLargeur);
listeDimensions.appendChild(itemHauteur);

infos.insertBefore(listeDimensions, infos.querySelector("h2").nextSibling);
