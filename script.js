//  fetch dashboard
fetch('https://newsapi.org/v2/everything?q=Apple&from=2022-01-31&sortBy=popularity&apiKey=8397781c82554c838ec1d8111311a6be')
  .then((res) => res.json())
  .then((res) => {
    let cards = '';
    res.articles.forEach((m) => (cards += showCards(m)));
    const articleContainer = document.querySelector('.article-container');
    articleContainer.innerHTML = cards;
  });

// fetch with search
const searchButton = document.querySelector('.search-button');
const inputKeyword = document.querySelector('.input-keyword');
searchButton.addEventListener('click', results);
function results(e) {
  e.preventDefault();
  const apiKey = '8397781c82554c838ec1d8111311a6be';
  let topic = inputKeyword.value;
  let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}
  `;

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      let cards = '';
      res.articles.forEach((m) => (cards += showCards(m)));
      const articleContainer = document.querySelector('.article-container');
      articleContainer.innerHTML = cards;
    });
}

function showCards(m) {
  return `
  <div class="col-md-4 my-3">
    <div class="card">
      <img src="${m.urlToImage}" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">${m.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${m.publishedAt}</h6>
        <p class="card-text">${m.description}</p>
        <a href="${m.url}" target="_blank" class="btn btn-danger">Read More</a>
      </div>
    </div>
  </div>
</div>`;
}
