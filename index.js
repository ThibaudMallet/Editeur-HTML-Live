// Stocker dans des variables les éléments HTML sur lesquels agir :
// - la balise textarea#user-input
const textArea = document.getElementById('input-text');
// - la balise div#contenuHTML
const contentHtml = document.getElementById('contenu-html');



// Créer une fonction à appeler dès qu'une touche sera relachée dans la zone de
// saisie #user-input. Cette fonction doit remplacer le contenu de #contenuHTML
// par celui de la textarea, mais attention : le *texte* de #input-text doit
// devenir du *HTML* dans #contenuHTML

function refreshContentHtml() {
    const valueToTransfer = textArea.value;
    contentHtml.innerHTML = valueToTransfer;
}


// Appeler la fonction lors d'un événement 'keyup'. Si tout va bien… ça marche !

textArea.addEventListener('keyup', refreshContentHtml);

// Bonus : pré-remplir #user-input avec le contenu de #contenuHTML, pour donner
// un exemple à l'utilisateur dès que la page se charge.
// - Ajouter du contenu HTML dans #contenuHTML (en dur, ou via JS).
// - Récupérer ce HTML sous forme texte et l'utiliser comme valeur de la #user-input.

const example = contentHtml.outerHTML;
textArea.textContent = example;