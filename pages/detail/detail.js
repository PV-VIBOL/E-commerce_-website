let foods = JSON.parse(localStorage.getItem("food-detail"));
console.log(foods)

let dom_detail = document.querySelector("#container-detail");
function createListfood(){
    document.querySelector(".card_detail");
    let card_detail = document.createElement("div")
    card_detail.className = "card-detail";
    for (let index = 0; index < foods.length; index++) {

      let card_food = document.createElement("div")
      card_food.id="info-detail"
      
      let image_food = document.createElement("img");
      image_food.src = foods[index].image;
      card_food.appendChild(image_food);

      let div = document.createElement("div");


      let h2 = document.createElement("h2");
      h2.textContent = "Well Come to my foods view";
      div.appendChild(h2)

      let titles = document.createElement("p");
      titles.textContent ="My name food : "+ foods[index].title;
      div.appendChild(titles);

      let description = document.createElement("p");
      description.textContent ="My detail: "+foods[index].description;
      div.appendChild(description);
      
      let price = document.createElement("p");
      let span = document.createElement("span");
      span.textContent = "Cost: "+ foods[index].price;
      
      let currency = document.createElement("span");
      currency.textContent = foods[index].currency;
      
      price.appendChild(span);
      price.appendChild(currency);
      div.appendChild(price);
      
      let paragraph = document.createElement("p");
      paragraph.textContent ="Benefit : "+ "Quick refunds on orders under US $1,000";
      div.appendChild(paragraph);

      let paragraph_one = document.createElement("p");
      paragraph_one.textContent ="Pringles Style Potato crisps potato crisps health snacks halal food potato snacks wholesale ";
      div.appendChild(paragraph_one);

      let button = document.createElement("button");
      button.textContent = "see more";
      div.appendChild(button)
      card_food.appendChild(div)

      let btn_items = document.createElement("div");
       btn_items.id ="btn";

      let btn_cart= document.createElement("button");
      btn_cart.textContent ="Add to Cart";
      
      let btn_cencel= document.createElement("button");
      btn_cencel.textContent ="cencel";

      let link_home = document.createElement("a")
      link_home.href = "../index.html";


      btn_items.appendChild(btn_cart);
      link_home.appendChild(btn_cencel);
      btn_items.appendChild(link_home);
      card_food.appendChild(btn_items);

      card_detail.appendChild(card_food);
      dom_detail.appendChild(card_detail);
    };
  }
createListfood();
