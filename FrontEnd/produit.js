AfficherUnProduit()

function getArticles() {
    let id = window.location.search.slice(4)
    console.log(id)
    return fetch(`http://localhost:3000/api/cameras/${id}`)
    // return fetch("http://localhost:3000/api/cameras")
      .then(function (httpBodyResponse) {
       return httpBodyResponse.json()
      })
      .then(function (idActual) {
        return idActual
      })
      .catch(function (error) {
        alert(error)
      })
}

async function AfficherUnProduit() {
    const idActual = await getArticles()
    console.log(idActual)
    document.getElementById("produit").innerHTML += `
    <li class="">${idActual.description}</li>
    <li><img class="" src="${idActual.imageUrl}" /></li>
    <li class="">${idActual.name}</li>
    `
    function justOne() {
        for (let i = 0; i < idActual.lenses.length; i++){
            lensesName = idActual.lenses[i]
            console.log(lensesName)
            document.getElementById("lense-select").innerHTML += `
                <option value="${lensesName}">${lensesName}</option>
            `
        }
    }
    justOne()
    let btnPanier = document.getElementById("addTo")
        console.log(btnPanier)
        //création variable de bouton avec comme id addTo et
        // affichage dans la console

        btnPanier.addEventListener("click", function () {
        // on crée un événement au click à la variable btnPanier qui a comme valeur le boutton avec comme id addTo
        alert("Ajouté au panier")
            let produit = {
                id : idActual._id,
                name : idActual.name,
                imageUrl : idActual.imageUrl,
                description : idActual.description,
                price : idActual.price
            } 
            //objet produit
            let produits = JSON.parse(localStorage.getItem("produits"))
            //on récupère le contenu de la key produits et on le transforme en objet
            if(produits) {
                //si produits existe dans le local storage
                produits.push(produit)
                //alors on y rajoute l'objet produit
                localStorage.setItem('produits', JSON.stringify(produits))
                //on ajoute au localstorage le contenu de produits au format json comme valeur à la key produits
                console.log(produits)
            }else {
                produits = []
                //on donne comme valeur à la variable produits un array
                produits.push(produit)
                //alors on y rajoute l'objet produit
                localStorage.setItem('produits', JSON.stringify(produits))
                //on ajoute au localstorage le contenu de produits au format json comme valeur à la key produits
                console.log(produits)
            }
    } 
)}