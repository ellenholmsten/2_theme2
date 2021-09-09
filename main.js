const urlParams = new URLSearchParams(window.location.search);
const urlId = urlParams.get("id");
const url =
  "https://semester2-9155.restdb.io/rest/wines?apikey=61362a9343cedb6d1f97ed5c";

//api key
const options = {
  headers: {
    "x-apikey": "61362a9343cedb6d1f97ed5c",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })

  .then((data) => {
    //we have the data
    //console.log(data);
    handleData(data);
  })

  .catch((e) => {
    //woops, something went wrong
    console.error("an error occured:"), e.message;
  });

function handleData(allData) {
  allData.forEach((data) => {
    if (urlId == data._id) {
      showProduct(data);
    }
  });
}

function showProduct(product) {
  console.log(product);

  //breadcrumbs
  document.querySelector(".breadcrumbs .brand").textContent = product.colour;
  document.querySelector(".breadcrumbs .productname").textContent =
    product.name;
  //name
  document.querySelector(".name").textContent = product.name;
  //year
  document.querySelector(".year").textContent = product.year;
  //country
  document.querySelector(".subtle").textContent = product.region;
  //grape
  document.querySelector(".grape").textContent = product.grape;

  //section class info part //
  //percentage//
  document.querySelector(".info .percentage").textContent = product.percentage;
  //color//
  document.querySelector(".info .color").textContent = product.colour;
  //price//
  document.querySelector(".price").textContent = product.price;

  //image
  document.querySelector(".smallProduct .image").src = product.img_url;
}
