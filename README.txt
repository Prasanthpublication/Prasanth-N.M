SECOND OPTION — ONE DATA FILE

Upload these items to the ROOT of your GitHub repository:

book.html
catalog.html
books.json
assets/
covers/

Your repository will look like:

index.html
book.html
catalog.html
books.json
assets/site.css
assets/book.js
assets/catalog.js
covers/your-cover-images.jpg

TO ADD A NEW BOOK

1. Open books.json.
2. Copy one complete book object.
3. Paste it before the final closing square bracket.
4. Change the slug, title, subtitle, series, bookNumber, genre, cover, description and buyUrl.
5. Upload the cover image to the covers folder.
6. Commit the changes.

The catalog and the individual book page update automatically.

Book page address example:
book.html?id=the-ashwood-murders

Homepage link example:
<a href="book.html?id=the-ashwood-murders">View Book</a>

IMPORTANT:
Keep JSON commas correct. Every object except the last one must end with a comma.