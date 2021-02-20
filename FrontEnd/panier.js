
recapPanier()

async function recapPanier() {
  /*const values = localStorage.getItem('panier')*/
  const sessionRestauree = JSON.parse(localStorage.getItem('produits'))
  console.log(sessionRestauree)
  //console.log(sessionRestauree)
  affichage(sessionRestauree)
  form(sessionRestauree)
}
function affichage(sessionRestauree) {
  let total = 0
  for (let items of sessionRestauree) {
    total += items.price
    const tabId = []
    tabId.push(items.id)
    console.log(tabId)
    let variableProd = ""
    console.log(tabId)
    console.log(variableProd)
    let Prod = document.getElementById("recap")
    Prod.innerHTML += `
      <li class="margin">${items.description}</li>
      <li><img src="${items.imageUrl}" /></li>
      <li>Prix : ${items.price}</li>
      <li>${items.name}</li>
    `
  }
    console.log(total)//yesssss
    document.getElementById("prixtotal").innerHTML += `
      <p>Prix Total</p>
      <p>${total}</p>
    `
  }
  function form(sessionRestauree) {
    let myform = document.getElementById('inscription')

    //afficher en console le boutton

    const products = []
    let idProd = " "

    //Faire une boucle pour récupéré juste les ID

    for (let items of sessionRestauree) {
      console.log(items.id)
      idProd = items.id
      console.log(idProd)
      products.push(idProd)
      console.log(idProd)
    }
    myform.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("Produit ajouter au panier")
      // Les objects
       const contact = {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        email: ""
      }
      contact.firstName = firstName.value
      contact.lastName = lastName.value
      contact.address = address.value
      contact.city = city.value
      contact.email = email.value

      let data = {
        contact : contact,
        products : products
      }
      /*console.log(data)*/

      //Vérrifier les champs

      //Si tous est ok (Les champ sont valide)
        //Je lance Fetch
          //Réponse -> Id Produit
          //Envoyé les informations sur la page confirmation de commande (localstorage - Get URL)
      //Si champ pas ok informé l'utilisateur
      
        // alert("Formulaire envoyé")
        // //au submit on afficher popup Formulaire envoyé
        let regLetters = /^[^0-9]+([A-Z][a-z]+)*/
        let regAdresse = /([0-9]*) ?([a-zA-Z,\. ]*) ?([0-9]{5}) ?([a-zA-Z]*)/
        let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+/

        if((regLetters.test(this.firstName.value)
        //si la valeur de l'input ne contient pas /^[a-zA-z]*/
            ||regAdresse.test(this.address.value)
        //
            ||emailRegExp.test(this.email.value)
        //
            ||regLetters.test(this.lastName.value)
        //
            ||regLetters.test(this.city.value))) {
              console.log("ca fonctionne")
            } else {
              console.log("ca ne fonctionne pas")
            }
        if (this.email.value.indexOf("@", 0) < 0)                 
        { 
          //dans le cas où l'adresse mail ne contient pas ce caractère, on retourne false
            alert("Mettez une adresse email valide."); 
            this.email.focus(); 
            //La méthode HTMLElement.focus() donne le focus à l'élément spécifié
            return false; 
        }    
        if (this.email.value.indexOf(".", 0) < 0)                 
        { 
          //dans le cas où l'adresse mail ne contient pas ce caractère, on retourne false
            alert("Mettez une adresse email valide."); 
            this.email.focus(); 
            //La méthode HTMLElement.focus() donne le focus à l'élément spécifié
            return false; 
        } 

          //si les regex sont vraies alors on rentre dans la boucle suivante
          if ((this.firstName.value != "") 
          && (this.address.value != "") 
          && (this.email.value != "") 
          && (this.lastName.value != "") 
          && (this.city.value != "") 
          )                                  
          //si les propriétés de l'objet contact ont une valeur qui n'est pas vide alors :
          { 
           //La méthode HTMLElement.focus() donne le focus à l'élément spécifié
           const newUser = fetch(`http://localhost:3000/api/cameras/order`, {
             method : "POST",
             //methode post
             body : JSON.stringify(data),
             //création document JSON de la constante contact
             headers: {
               "Content-Type" : "application/json",
             }
           })
           .then(function(response) {
             return response.json()
             //si fetch fonctionne, sa reponse est lue jusqu'à la fin
           })
           .then(function(data) {
             console.log(data)
             //si fonction est bien retournée, on recupère les infos du paramètre text et on les affiche
     
             //Récupéré id commandes 
             //Envoyer vers page commandes
           })
           .catch(function(error) {
             console.log(error)
             //en cas d'erreur on renvoi l'erreur
           }) 
              //on retourne true et les valeurs sont récupérées
        }
        }
         /*if (regLetters.test(this.firstName.value)
         || regLetters.test(this.address.value) && regNumbers.test(this.address.value)
         || emailRegExp.test(this.email.value) 
         || regLetters.test(this.lastName.value) 
         || regNumbers.test(this.city.value) ) {
          alert("il y a une erreur verifiez vos informations")
           let inputError = document.getElementById('error')
           inputError.style.color ='red'
           inputError.style.fontWeight ='700'
           inputError.innerHTML += `
           <p>vos informations sont eronnées</p>
           `
           console.log(inputError)
         }  */    
    )
  }
  /***********form ************/
   