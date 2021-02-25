recapCommande()
async function recapCommande() {
  /*const values = localStorage.getItem('panier')*/
  const sessionRestauree = JSON.parse(localStorage.getItem('idOrder'));
  console.log(sessionRestauree)
  //console.log(sessionRestauree)
  let commande = JSON.parse(localStorage.getItem('idOrder'))
  //let objetCommande = JSON.parse(commande)
  let contact = commande.contact
  let products = commande.products
  let NCommande = commande.orderId
  console.log(contact)
  console.log(products)
  console.log(NCommande)
      /*************************** */
Infoscontact (contact,products,NCommande)
localStorage.clear();
}
function Infoscontact (contact,products,NCommande) {
      let total = 0
      for(let product of products) {
            total += product.price
            console.log(product.name)
            console.log(product.price)
            console.log(product.imageUrl)
            document.getElementById('commande').innerHTML += `
            <li>${product.name}</li>
            <li>${product.price}</li>
            <li><img src="${product.imageUrl}"></li>
            `
      }
      //document.getElementById('idOrd').style.width = '100%'
      //document.getElementById('idOrd').style.textAlign = 'center'
      document.getElementById('idOrd').innerHTML += `
      <li>Merci ${contact.firstName} ${contact.lastName}</li>
      <li>N° de commande : ${NCommande}</li>
      <li>Prix total de commande :  ${total}</li>
      <li>Pour votre commande contenant :</li>
      `          
}