let foods = JSON.parse(localStorage.getItem("food-cart"));
let dom_cart = document.querySelector("#container-cart"); 

let span = document.querySelector("#span")
span.textContent = foods.length;

let btn_checkout= document.querySelector("#checkout");
btn_checkout.addEventListener("click",checkPrice)


let  total = 0;
function createListfood(){
  document.querySelector("#cart-item").remove();
  let cart_item = document.createElement("div");
  cart_item.id = "cart-item";
  for (let index = 0; index < foods.length; index++) {
    total += Math.round(foods[index].price);
    console.log(total);

    let card_food = document.createElement("div")
    card_food.className ="card-cart";
    
    let titles = document.createElement("h2");
    titles.textContent =foods[index].title;
    card_food.appendChild(titles)

    let div_img = document.createElement("div");
    div_img.className = "image"

    let image_food = document.createElement("img");
    image_food.src = foods[index].image;
    div_img.appendChild(image_food);
    card_food.appendChild(div_img);
    
    
    let description = document.createElement("p");
    description.textContent = foods[index].description;
    card_food.appendChild(description);
    
    let price = document.createElement("p");
    let span = document.createElement("span");
    span.textContent = foods[index].price;

    let currency = document.createElement("span");
    currency.textContent = foods[index].currency;

    price.appendChild(span);
    price.appendChild(currency);
    card_food.appendChild(price);

    let div_btn = document.createElement("div")
    div_btn.id = "btn-cart";

    let btn_buy = document.createElement("button");
    btn_buy.textContent = "Buy here";
    div_btn.appendChild(btn_buy);

    let link_home = document.createElement("a")
    // link_home.href = "../index.html";

    let btn_cencel = document.createElement("button");
    btn_cencel.textContent = "Delete";
    btn_cencel.dataset.index = index
    btn_cencel.addEventListener("click",removeCart)
    div_btn.appendChild(btn_cencel);

    card_food.appendChild(div_btn);
    cart_item.appendChild(card_food);
    dom_cart.appendChild(cart_item);
  };
  let checkout = document.querySelector("#price");
  checkout.textContent ="Total is : "+"$"+total;
}
// check price product===================================
let alert_sms = document.querySelector("#alert-message");
function checkPrice(){
  alert_sms.style.display = "block";
}
let btn_no = document.querySelector("#no");
btn_no.addEventListener("click",btnNo )

let btn_yes= document.querySelector("#yes");
btn_yes.addEventListener("click",btnNo)

function btnNo(){
  alert_sms.style.display = "none";

}


function removeCart(event) {
  let index = event.target.dataset.index;
  // Remove food
  foods.splice(index, 1);
  
  span.textContent = foods.length;
  // Save to local storage
  localStorage.setItem("food-cart", JSON.stringify(foods));
  total = 0;
  createListfood();
  // createListfood();
}
foods = JSON.parse(localStorage.getItem("food-cart"));
createListfood();
