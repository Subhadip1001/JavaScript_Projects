document.getElementById("local-name").innerHTML = JSON.parse(
  localStorage.getItem("user")
).username + "👋";



document.getElementById("logout").addEventListener("click", function () {
  localStorage.removeItem("user");
  window.location.href = "../index.html";
});

document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  if (query) {
    fetchBooks(query);
  } else {
    fetchBooks("java+python+html+css+c+cpp");
  }
});

function fetchBooks(query = "java+python+html+css+c+cpp") {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      const bookList = document.getElementById("book-list");
      bookList.innerHTML = "";
      data.items.forEach((item) => {
        const book = item.volumeInfo;
        const bookDiv = document.createElement("div");
        bookDiv.className = "book";
        bookDiv.innerHTML = `
                      <img src="${
                        book.imageLinks ? book.imageLinks.thumbnail : ""
                      }" alt="${book.title}">
                      <h3>${book.title}</h3>
                      <p>${
                        book.authors
                          ? book.authors.join(", ")
                          : "Unknown Author"
                      }</p>
                      <a href="${
                        book.previewLink
                      }" target="_blank">Read Book</a>
                  `;
        bookList.appendChild(bookDiv);
      });
    });
}

fetchBooks();
