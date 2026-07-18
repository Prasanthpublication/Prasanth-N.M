let allBooks = [];
function renderBooks(items) {
  const grid = document.getElementById("catalog");
  grid.innerHTML = items.map(book => `
    <article class="card">
      <a href="book.html?id=${encodeURIComponent(book.slug)}"><img src="${book.cover}" alt="${book.title} cover"></a>
      <div class="card-body">
        <p class="eyebrow">${book.series}${book.bookNumber ? ` · Book ${book.bookNumber}` : ""}</p>
        <h2>${book.title}</h2>
        <p>${book.subtitle}</p>
        <a class="button" href="book.html?id=${encodeURIComponent(book.slug)}">View Book</a>
      </div>
    </article>`).join("");
}
async function start() {
  const response = await fetch("books.json", {cache:"no-store"});
  allBooks = await response.json();
  renderBooks(allBooks);
  document.getElementById("search").addEventListener("input", event => {
    const q = event.target.value.toLowerCase().trim();
    renderBooks(allBooks.filter(book =>
      [book.title, book.series, book.genre, book.subtitle].join(" ").toLowerCase().includes(q)
    ));
  });
}
start();