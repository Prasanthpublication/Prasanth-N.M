async function loadBook() {
  const params = new URLSearchParams(location.search);
  const slug = params.get("id");
  const response = await fetch("books.json", {cache: "no-store"});
  if (!response.ok) throw new Error("Could not load books.json");
  const books = await response.json();
  const book = books.find(item => item.slug === slug);

  if (!book) {
    document.getElementById("app").innerHTML =
      '<div class="wrap error"><h1>Book not found</h1><p>Return to the catalog and choose a book.</p><a class="button" href="catalog.html">Browse Books</a></div>';
    return;
  }

  document.title = `${book.title} by Prasanth N.M.`;
  document.querySelector('meta[name="description"]').setAttribute("content", book.subtitle);
  document.querySelector('link[rel="canonical"]').setAttribute("href",
    `https://prasanthpublication.github.io/Prasanth-N.M/book.html?id=${encodeURIComponent(book.slug)}`);

  document.getElementById("app").innerHTML = `
    <header class="hero"><div class="wrap grid">
      <img class="cover" src="${book.cover}" alt="${book.title} book cover">
      <div>
        <p class="eyebrow">${book.series}${book.bookNumber ? ` · Book ${book.bookNumber}` : ""}</p>
        <h1>${book.title}</h1>
        <p class="subtitle">${book.subtitle}</p>
        <p>${book.genre} · Prasanth N.M.</p>
        <a class="button" href="${book.buyUrl}" target="_blank" rel="noopener">Read Now</a>
      </div>
    </div></header>
    <section><div class="wrap panel">
      <h2>About the Book</h2>
      <p>${book.description}</p>
    </div></section>
    <section><div class="wrap panel">
      <h2>About the Author</h2>
      <p>Prasanth N.M. writes atmospheric mystery, crime, horror, thriller, romance, fantasy and suspense fiction.</p>
    </div></section>`;
}
loadBook().catch(err => {
  document.getElementById("app").innerHTML =
    `<div class="wrap error"><h1>Unable to load book</h1><p>${err.message}</p></div>`;
});