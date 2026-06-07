document.addEventListener("DOMContentLoaded", function () {


// ===============================
// ❤️ ADD TO WISHLIST
// ===============================

function addToWishlist(name, price, image = "") {

let wishlist =
JSON.parse(localStorage.getItem("wishlist")) || [];

// منع التكرار (اختياري احترافي)
const exists = wishlist.some(item => item.name === name);

if(!exists){
wishlist.push({ name, price, image });
localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

// تحويل مباشر لصفحة المفضلة
window.location.href = "wishlist.html";
}

// مهم جدًا عشان HTML يقدر يناديها
window.addToWishlist = addToWishlist;


// ===============================
// 🔍 SEARCH
// ===============================

const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

const value = this.value.toLowerCase();

document.querySelectorAll(".luxury-card")
.forEach(card => {

const title = card.querySelector("h3")
?.innerText.toLowerCase();

if(title && title.includes(value)){
card.style.display = "block";
}else{
card.style.display = "none";
}

});

});

}


// ===============================
// 📂 FILTER
// ===============================

const filter =
document.getElementById("categoryFilter");

if(filter){

filter.addEventListener("change", function(){

const value = this.value;

document.querySelectorAll(".luxury-card")
.forEach(card => {

if(
value === "all" ||
card.dataset.category === value
){
card.style.display = "block";
}else{
card.style.display = "none";
}

});

});

}

});