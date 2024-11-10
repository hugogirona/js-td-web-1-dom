/*
Exercices qui accompagnent le tuto en anglais de Christian Heilmann :
« The essentials of DOM scripting in 10 minutes »,
http://icant.co.uk/articles/domessentials/
=> voir traduction française sur transparents (js-cours-DOM.pdf)
*/

/* 1. Cibler l'élément d'id nav */
console.log(document.getElementById('nav'));

/* 2. Récupérer tous les li */
console.log(document.querySelectorAll('li'));

/* 3. Cibler le 4e li */
console.log(document.querySelector('#li4'));

/* 4. Compter le nombre de li dans la page */
console.log(document.querySelectorAll('li').length);

/* 5. Cibler le premier li pair */
console.log(document.querySelector('.pair'));


/* 6. Récupérer tous les li de classe impair */
console.log(document.querySelectorAll('.impair'));


/* a) afficher ce qu'on obtient */


/* b) afficher le 2e li de classe impair */
console.log(document.querySelectorAll('.pair')[1]);


/* c) afficher chacun des li impair */
for (const arrayElement of document.querySelectorAll('.impair')) {
    console.log(arrayElement);
}


/* d) compter le nombre de li de classe impair dans la page */
console.log(document.querySelectorAll('.pair').length);



/* 7. Cibler le 4e li puis, à partir de là, cibler son frère juste avant lui */
document.querySelector('#li4')
// console.log(document.querySelector('li:has(+ #li4)'))
console.log(document.querySelector('#li4').previousSibling.previousSibling)

/* 8. Cibler le 4e li puis, à partir de là, cibler le suivant */
console.log(document.querySelector('#li4').nextSibling.nextSibling)


/* 9. Cibler le parent du 4e li */
console.log(document.querySelector('#li4').parentNode)

/* 10. Récupérer tous les enfants de l'ul */
console.log(document.querySelectorAll('ul li'))

/* a) afficher ce qu'on obtient */

/* b) cibler le 1er enfant de l'ul */
console.log(document.querySelector('ul li:first-child'));

/* c) cibler le dernier enfant de l'ul */
console.log(document.querySelector('ul li:last-child'));


/* c) cibler le 4e enfant de l'ul */

console.log(document.querySelector('ul li:nth-child(4)'));

/* 11. Chaînage de méthodes - que retournent les expressions suivantes ? */
/* a) document.getElementById("nav"). getElementsByTagName("li")[3].firstChild */

console.log(document.getElementById("nav"). getElementsByTagName("li")[3].firstChild)

/* b) document. getElementsByTagName("li")[2].childNodes[3].firstChild */


/* c) document. getElementsByTagName("li")[2].firstChild.firstChild */

console.log(document. getElementsByTagName("li")[2].firstChild.firstChild)

/* 12. Afficher les propriétés (nom du nœud, type de nœud, valeur du nœud) d'un nœud
*/
/* a) du noeud document.getElementById("nav").getElementsByTagName("li")[3].firstChild */


/* b) du noeud document.getElementById("nav").getElementsByTagName("a")[2].firstChild */



/* 13. Changer le texte "Photos" en "Visuals" */

document.querySelector('a[href="photos.html"]').textContent = "Visuals"

/* 14. Modifier les attributs d'un élément */
/* a) Changer la valeur de l'attribut href du lien "Photos" en "photos.php" */

document.querySelector('a[href="photos.html"]').href = "photos.php"

/* a) Lui ajouter un attribut title avec la valeur "voir mes photos" */
document.querySelector('a[href="photos.php"]').title = "voir mes photos"

/* 15. Supprimer le dernier li du menu
       (faites-le en utilisant la méthode querySelector pour cible l'ul
        et querySelectorAll pour cibler les li)
*/
document.querySelector('li:last-child').remove()


/* 16. Ajouter un li à la fin de la liste */

document.querySelector('ul').insertAdjacentHTML("beforeend", "<li></li>");


/* 17. Ajouter un lien dans le menu. Ce lien doit
	- venir avant "photos",
	- afficher le texte "Bibliographie",
	- pointer vers la page "biblio.html" et
	- afficher au survol la boîte de dialogue avec le texte "consulter ma bibliographie"  */

const menu = document.getElementById('nav');
const newListItem = document.createElement('li');
const newLink = document.createElement('a');

newLink.href = 'biblio.html';
newLink.textContent = 'Bibliographie';
newLink.title = 'consulter ma bibliographie';

newListItem.appendChild(newLink);

const photoLink = document.querySelector('#li4');
menu.insertBefore(newListItem, photoLink);




/* 18. Modifier le lien "Photos" 
	  - changer son libellé en "Visuals" 
	  - ajouter une boîte de dialogue au survol avec le texte "voir la galerie" 
	  - changer la cible du lien en "visuals.html " */

document.querySelector('li:nth-child(5) a').title = "voir la galerie";
document.querySelector('li:nth-child(5) a').href = "visuals.html";


/* 19. Dupliquer le li "Photos" et s'en servir pour ajouter un lien
	   - juste après le lien "Photos"
	   - dont le libellé est "Visuals" 
	   - avec une boîte de dialogue au survol qui affiche le texte "voir la galerie" 
	   - qui pointe vers la page "visuals.html " */





/* 20. Remplacer le dernier lien par le texte (non cliquable) "Contact : monmail@gmail.com"*/

document.querySelector('li:last-child').textContent = "Contact : monmail@gmail.com";
