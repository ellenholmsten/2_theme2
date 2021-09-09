//copy.queryselector("a").href = "product.html?id=" + data._id;
const urlParams = new URLSearchParams(window.location.search);
const colour = urlParams.get("colour");

const url = `https://semester2-9155.restdb.io/rest/wines?apikey=61362a9343cedb6d1f97ed5c&q={"colour": "${colour}"}`;
console.log(url);

//api key
const options = {
  headers: {
    "x-apikey": "61362a9343cedb6d1f97ed5c",
  },
};

fetch(url, options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductlist(data);
  });

function handleProductlist(data) {
  //console.log(data);
  data.forEach(showProduct);
}

/*<template id="smallProductTemplate">
    <main>
      <article class="smallProduct">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
          alt="Sahara Team India Fanwear Round Neck Jersey" />
        <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
        */

function showProduct(product) {
  //console.log(product);
  //grab the template
  console.log(product);
  const template = document.querySelector("#smallProductTemplate").content;
  //clone it
  const copy = template.cloneNode(true);

  /* copy.querySelector("a").setAttribute("href", "product.html?id=" + product.id);
  copy.querySelector(
    ".smallProduct .image"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  copy.querySelector(
    ".subtle"
  ).textContent = `${product.articletype} | ${product.brandname}`;
  copy.querySelector("h3").textContent = product.productdisplayname;

  document.querySelector("h2").textContent = product.season;

  const discountamount = (product.discount / 100) * product.price;
  const newpricenoround = product.price - discountamount;
  const newprice = Math.round(newpricenoround);
*/

  //grab parent
  const parent = document.querySelector("main");
  //append
  parent.appendChild(copy);
}
