// Get food from foodsStorage=======================================

let foods = JSON.parse(localStorage.getItem("foods"));
// console.log(foods)
// variables=================================================================
let dom_container = document.querySelector(".container");
let search_value = document.querySelector("#search");
search_value.addEventListener("keyup",searchFood)
let food_detail  = [];
let food_cart= JSON.parse(localStorage.getItem("food-cart"));
let counter = food_cart.length
if (counter<1){
  food_cart  = [];
}

// dom_searchinput.addEventListener("keyup",search_food)
//  create list of foods=================================================

function getDetail(event){
  let index = event.target.dataset.index;
  console.log(index)
  food_detail.push(foods[index]);
  localStorage.setItem("food-detail", JSON.stringify(food_detail));
}
function getCart(event){
  counter ++;
  let span = document.querySelector("#span")
  span.textContent = counter;
  let index = event.target.dataset.index;
  food_cart.push(foods[index]);
  localStorage.setItem("food-cart", JSON.stringify(food_cart));
}

function createListfood(){
    for (let index = 0; index < foods.length; index++) {

      let card_food = document.createElement("div")
      card_food.className ="cards"
      
      let titles = document.createElement("p");
      titles.textContent = foods[index].title;
      card_food.appendChild(titles)

      let image_food = document.createElement("img");
      image_food.src = foods[index].image;
      card_food.appendChild(image_food);
      
      
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
      
      let div1 = document.createElement("div");
      for (let i=0; i<3; i++){
        let star = document.createElement("i")
        star.className ="material-icons";
        star.textContent ="star";
        div1.appendChild(star);
        
      };
      for (let i=0; i<2; i++){
        let starHalf = document.createElement("i")
        starHalf.className ="material-icons";
        starHalf.textContent ="star_half";
        div1.appendChild(starHalf);
        
      };
      card_food.appendChild(div1)
      
      let div2 = document.createElement("div")
      div2.className = "buy-now"

      let btn_buy = document.createElement("button");
      btn_buy.textContent = "Add+ Cart"
      btn_buy.dataset.index = index;
      btn_buy.addEventListener("click",getCart)

      let link_cart = document.createElement("a");
      // link_cart.href = "cart/cart.html";
      link_cart.appendChild(btn_buy)
      
      let button = document.createElement("button");
      button.id = "btn-detail"
      button.textContent = "Detail"
      button.dataset.index = index;
      button.addEventListener("click",getDetail)

      let link_detail = document.createElement("a");
      link_detail.href = "detail/detail.html";
      link_detail.appendChild(button)
      
      div2.appendChild(link_cart)
      div2.appendChild(link_detail)
      card_food.appendChild(div2);
      
      dom_container.appendChild(card_food);
    };
  }
  // search food====================================================================
  function searchFood() {
    let food_title = document.querySelectorAll(".cards");
    let search_text = search_value.value.toLocaleLowerCase();
    for (let title of food_title) {
        let item = title.firstElementChild.textContent.toLocaleLowerCase();
        if (item.indexOf(search_text) === -1) {
            title.style.display = "none";
        }
        else {
            title.style.display = "block";
        }
    }
}
createListfood();

