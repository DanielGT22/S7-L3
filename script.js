let imgElements = document.querySelectorAll(".img img");
let titleElements = document.querySelectorAll(".title");
let priceElements = document.querySelectorAll(".price");
let categoryElements = document.querySelectorAll(".category");

fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      if (res.status === 404) {
        throw new Error("404 - Not Found");
      } else if (res.status === 500) {
        throw new Error("500 - Internal Server Error");
      } else {
        throw new Error("Generic Error");
      }
    }
  })
  .then((bookData) => {
    for (let i = 0; i < bookData.length; i++) {
      let image = bookData[i].img;
      let name = bookData[i].title;
      let price = bookData[i].price;
      let category = bookData[i].category;

      imgElements[i].src = image;
      titleElements[i].textContent = name;
      priceElements[i].textContent = price;
      categoryElements[i].textContent = category;
    }
  })
  .catch((err) => {
    console.log(err);
  });
