
main()

async function main() {
  const articles = await getArticles()
  for (article of articles) {
    /*const article = articles[i];*/
    console.log(article)
    displayArticle(article)
  }
}

function getArticles() {
  return fetch("http://localhost:3000/api/cameras")
    .then(function (httpBodyResponse) {
     return httpBodyResponse.json()
    })
    .then(function (articles) {
      return articles
      console.log(articles)
    })
    .catch(function (error) {
      alert(error)
    })
}

 function displayArticle(article) {
  document.getElementById("col-4").innerHTML += `
    <ul>
    <li class = "donnees">${article.description}</li>
      <li><img class="${article._id}"" onclick="location.href='produit.html?id=${article._id}'" src="${article.imageUrl}" /></li>
      <li class = "donnees">${article.name} <br> Prix : ${article.price}</li>
    </ul>
  `
}
