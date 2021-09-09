copy.queryselector("a").href = "product.html?id=" + data._id;

const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("colour");

const url = "https://kea-alt-del.dk/t7/api/products?season=" + colour;

fetch(url)
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
