const products = [
  { name: "Chocolate Chip Cookies", type: "regular", img: "chocchip.jpg" },
  { name: "Blueberry Muffins", type: "dairy-free", img: "blumuff.jpg" },
  { name: "Banana Bread", type: "dairy-free", img: "banb.jpg" },
  { name: "Chocolate Chip Muffins", type: "regular", img: "chocmuff.jpg" },
  { name: "Vegan Brownies", type: "vegan", img: "vegbrow.jpg" },
  { name: "Brownies", type: "Regular", img: "regbrow.jpg" },
  { name: "Vanilla Cupcakes", type: "regular", img: "vancup.jpg" },
  { name: "Oatmeal Raisin Cookies", type: "dairy-free", img: "oatcookies.jpg" },
  { name: "GF Chocolate Cake", type: "gluten-free", img: "gfchoc.jpg" },
  { name: "Peanut Butter Cookies", type: "regular", img: "pbcookies.jpg" },
  { name: "Donuts", type: "regular", img: "donuts.jpg" },
  { name: "Cinnamon Rolls", type: "regular", img: "cinrolls.jpg" },
  { name: "Strawberry Shortcake", type: "regular", img: "strawshort.jpg" },
  { name: "Lemon Tart", type: "gluten-free", img: "tarts.jpg" },
  { name: "Macaroons", type: "dairy-free", img: "macaroons.jpg" },
  { name: "Almond Cake", type: "sugar-free", img: "almcake.jpg" },
  { name: "Strawberry Cheesecake", type: "regular", img: "strawcheese.jpg" },
  { name: "Sugar-Free Muffins", type: "sugar-free", img: "sfmuff.jpg" },
  { name: "Blueberry Cheesecake", type: "regular", img: "bluecheese.jpg" },
  { name: "Chocolate Cake", type: "regular", img: "choccake.jpg" }
];

function renderProducts(filtered) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.type.replace('-', ' ').toUpperCase()}</p>
    `;
    container.appendChild(card);
  });
}

function filterProducts() {
  const checkboxes = document.querySelectorAll(".filter-section input[type='checkbox']");
  const selectedTypes = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

  const filtered = selectedTypes.length === 0
    ? products
    : products.filter(product => selectedTypes.includes(product.type) || !["gluten-free", "dairy-free", "nut-free", "vegan", "sugar-free"].includes(product.type));

  renderProducts(filtered);
}

// Initial render
window.onload = filterProducts;
