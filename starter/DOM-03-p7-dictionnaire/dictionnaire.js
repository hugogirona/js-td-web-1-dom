// 03-DOM : MODIFIEZ LA STRUCTURE DE LA PAGE
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 7 : « Dictionnaire » : construire un dictionnaire
1. Votre dictionnaire contient les mots et les définitions suivantes :
    - Procrastination : Tendance pathologique à remettre systématiquement au lendemain
    - Tautologie : Phrase dont la formulation ne peut être que vraie
    - Oxymore : unit dans un même syntagme deux termes sémantiquement opposés
2. Stockez la liste des mots du dictionnaire dans la variable mots,
    qui est un tableau d'objets :
    - chaque élément du tableau représente un mot ;
    - chaque mot est lui-même un objet avec deux propriétés :
        * une propriété "terme", et
        * une propriété "definition"
3. Créer le dictionnaire sur la page web, dans la div d'id "contenu"
AIDE : utilisez la méthode forEach() pour parcourir le tableau de mots
*/

const mot = [
    {
        terme: 'Procrastination',
        definition: 'Tendance pathologique à remettre systématiquement au lendemain'
    },
    {
        terme: 'Tautologie',
        definition: 'Phrase dont la formulation ne peut être que vraie'
    },
    {
        terme: 'Oxymore',
        definition: 'unit dans un même syntagme deux termes sémantiquement opposés'
    }
]
const divElt = document.querySelector('#contenu');
const tableElt = document.createElement('table');
const captionElt = document.createElement('caption');
captionElt.textContent = "Voici une liste de mots et leur définition";

divElt.appendChild(tableElt);
tableElt.appendChild(captionElt);


const trElt1 = document.createElement('tr');
const tdElt1 = document.createElement('td');
const tdElt2 = document.createElement('td');

tdElt1.textContent = 'Termes'
tdElt2.textContent = 'Définitions';
tdElt1.className = 'terme';
tdElt2.className = 'definition';

tableElt.appendChild(trElt1);
trElt1.appendChild(tdElt1);
trElt1.appendChild(tdElt2);



mot.forEach((mot) => {
    const trElts = document.createElement('tr');
    const tdElts = document.createElement('td');
    const tdElts2 = document.createElement('td');

    tdElts.textContent = mot.terme;
    tdElts2.textContent = mot.definition;

    trElts.appendChild(tdElts);
    trElts.appendChild(tdElts2);

    tableElt.appendChild(trElts);
})