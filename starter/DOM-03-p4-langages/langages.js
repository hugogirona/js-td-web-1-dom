// 03-DOM : MODIFIEZ LA STRUCTURE DE LA PAGE
/*
SOURCE :
- https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/3501891-modifiez-la-structure-de-la-page
- https://github.com/oc-courses/javascript-web
*/

/* DOM - PREPA 4 : « Langages » : 
Ajouter sous la liste des langages un paragraphe
"En voici une liste plus complète."
où le mot "liste" est un lien vers l'URL suivante :
https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation.
*/

const ulElt = document.querySelector("#langages");

const liElt = document.createElement("li");

ulElt.appendChild(liElt);

liElt.insertAdjacentHTML("afterbegin", "En voici une <a href='https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation.\n'>liste</a> plus complète.")
