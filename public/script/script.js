// Déclaration de mes variables
let monProduit = document.getElementById('monProduit')
let maListe = document.getElementById('maListe')

// Je déclare un tableau vide qui va contenir mes produits
let monTableau = []

// condition pour vérifier que la clef est bien présente dans le localStorage 
if (localStorage.getItem('monTableau')) {
    // Si ok, Je recupère ce qui est stocké dans mon local storage ('monTableau')
    monTableau = localStorage.getItem('monTableau')

    // Et je le transforme en array à l'aide de la fonction split avec comme séparateur la virgule
    monTableau = monTableau.split(',')
}

// AU CHARGEMENT DE LA PAGE, j'effectue une boucle pour afficher mes produits présents dans mon tableaudu localStorage

// Nous allons créer un index qui démarre à 0
let index = 0

monTableau.forEach(produit => {
    maListe.innerHTML += `
        <div id="produit-${index}"class="h3 ps-3 pe-1 border border-dark rounded d-flex justify-content-between">
            <span>${produit}</span><i class="bi bi-x-square-fill" onclick="effacer('produit-${index}')"></i>
        </div>    
    `
    // Je pense à incrémenter ma variable
    index++
});

// Déclaration de mes fonctions effacer() et sauvegarder()
function effacer(produitId) {

    // 1- je récupère l'id du produit à l'aide du paramètre de fonction
    let elementAEffacer = document.getElementById(produitId)

    // j'efface le produit à l'aide de la fonction remove()
    elementAEffacer.remove()

    // je recupère l'index du produit 
    let test = produitId.split('-')

    // j'efface l'élément du tableau monTableau
    monTableau.splice(test,1)

    // je sauvegarde monTableau dans mon localStorage
    localStorage.setItem('monTableau', monTableau)
}

function sauvegarder() {
    // je lance l'insertion de l'élément uniquement quand la valeur n'est pas vide
    if (monProduit.value != '') {

        // 1- je récupère la valeur du produit renseigné
        let produitValue = monProduit.value

        // 2- nous insérons dans monTableau la valeur recupérée
        monTableau.push(produitValue)

        // index contient l'index en cours des éléments voir plus haut 
        // 3- j'écris du html dans l'élément avec l'id maListe avec la valeur du produit
        maListe.innerHTML += `
        <div id="produit-${index}" class="h3 ps-3 pe-1 border border-dark rounded d-flex justify-content-between">
            <span>${produitValue}</span><i class="bi bi-x-square-fill" onclick="effacer('produit-${index}')"></i>
        </div>    
        `

        // 4- je pense à incrémenter de nouveau l'index
        index++

        // 5- on efface la valeur de l'input via une valeur vide
        monProduit.value = ''

        // 6- je stock tout mon tableau dans mon local storage avec la clef 'monTableau'
        localStorage.setItem('monTableau', monTableau)
    }
}