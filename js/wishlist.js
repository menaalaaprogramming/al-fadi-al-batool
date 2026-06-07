document.addEventListener("DOMContentLoaded", function(){

let container =
document.getElementById("wishlistContainer");

let wishlist =
JSON.parse(localStorage.getItem("wishlist")) || [];

container.innerHTML = wishlist.map(item => `
<div class="wish-card">

    <img src="${item.image}" style="width:100%;border-radius:15px">

    <h3>${item.name}</h3>

    <p>${item.price} ج.م</p>

</div>
`).join("");

});