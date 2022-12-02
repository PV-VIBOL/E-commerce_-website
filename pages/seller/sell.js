

//  create List of food==================================================================
let foods = [
{title:"Chip",
price:10.00,
currency:"$",
description:"High Quality Popular delicious ",
image:"../images/chip.png"},

{title:"Jam",
price:5.00,
currency:"$",
description:"High Quality Popular delicious ",
image:"../images/jam.png"
},

{title:"Work noodle",
price:11.50,
currency:"$",
description:"High Quality Popular delicious ",
image:"../images/wok noodle.png"
},

{title:"Spicy noodle",
price:8.90,
currency:"$",
description:"High Quality Popular delicious ",
image:"../images/spicy noodle.png"
},

{title:"Kavlak", 
price:7.70,
currency:"$",
description:"High Quality Popular delicious ",
image:"../images/kavlak.png"
},

{title:"Pork",
price:9.20,
currency:"$",
description:"High Quality Popular delicious ",
image:"../images/pork.png"
},

{title:"Milk",
price:11.80,
currency:"$",
description:"High Quality Popular delicious ",
image:"../images/milk.png"
},

{title:"fish",
price:21.00,
currency:"$",
description:"High Quality Popular delicious ",
image:"../images/fish.png",
},
];
// variable =========================================================================

let dom_card_listfood = document.querySelector("#list-food")
let dom_fooddialog = document.getElementById("food-dialog");
let cancel = document.querySelector("#cancel"); 
let create_food= document.querySelector("#create"); 
let add_food = document.querySelector("#add_food");
let get_image = document.querySelector("#file")
let link_image ="";
let foodLocation = foods.length;

//  LOCAL FOODSTORAGE  ---------------------------------------------------------
function saveFood() {
  localStorage.setItem("foods", JSON.stringify(foods));
}

function loadFood() {
  let foodsStorage = JSON.parse(localStorage.getItem("foods"));
  if (foodsStorage !== null) {
    foods = foodsStorage;
  }
}

// Show and hide dialog======================================================

function hide(element) {
    element.style.display = "none";
  }
  function show(element) {
    element.style.display = "block";
  }
  function onAddFood() {
    show(dom_fooddialog);
    foodLocation = foods.length;
  }
  
  function onCancel(e) {
    hide(dom_fooddialog);
    document.querySelector("#title").value = "";
    document.querySelector("#text").value = "";
    document.querySelector("#much").value = "";
    document.querySelector("#currency").value = "";


  }
  
  function onCreate() {
    hide(dom_fooddialog);
  } 

// create foods ==================================================================

function createListfood(){
  document.querySelector("#cards-item").remove();
  let listfood = document.createElement("div");
  listfood.id = "cards-item";
  
  for (let index = 0; index < foods.length; index++) {
    let counter = index+1

    let card_food = document.createElement("div")
    card_food.id ="card-food"
    card_food.dataset.index = index
    
    let div1 = document.createElement("div");
    div1.className = "number-food"
    card_food.appendChild(div1);
    
    let number = document.createElement("p");
    number.id = "count"
    number.textContent = counter;
    div1.appendChild(number)

    let titles = document.createElement("p");
    titles.textContent = foods[index].title;
    div1.appendChild(titles)

    let price = document.createElement("p");
    price.textContent = foods[index].price;
    div1.appendChild(price)

    let descriptions = document.createElement("p");
    descriptions.textContent = foods[index].description;
    card_food.appendChild(descriptions)
    
    let div = document.createElement("div");
    div.className = "btn-edit"
    card_food.appendChild(div);
    
    
    let btn_edit = document.createElement("button");
    btn_edit.textContent = "Edit";
    btn_edit.addEventListener("click",editFood )
    div.appendChild(btn_edit);
    
    let btn_delete= document.createElement("button");
    btn_delete.textContent = "Delete";
    btn_delete.addEventListener("click",removefoods)
    div.appendChild(btn_delete);
    
    listfood.appendChild(card_food)
    dom_card_listfood.appendChild(listfood);
  }

}
// Uplord image form input===============================================

function getImage(element) {
  let file = element.files[0];
  let reader = new FileReader();
  reader.onloadend = function() {
      link_image = reader.result;
  }
  reader.readAsDataURL(file);
}

// remove the foods=============================================================

function removefoods(event) {
  //  Get index
  let index = event.target.parentElement.parentElement.dataset.index;
  // Remove food
  foods.splice(index, 1);

  // Save to local storage
  saveFood();

  createListfood();
}

// Edit your food ==========================================================================

function editFood(event) {
  let index = event.target.parentElement.parentElement.dataset.index;
  let food  = foods[index];
  
  document.querySelector("#title").value = food.title;
  document.querySelector("#text").value = food.description;
  document.querySelector("#much").value = food.price;
  document.querySelector("#currency").value = food.currency;
  // link_image = link_image;
  show(dom_fooddialog);
  let create = document.querySelector("#create");
  create.textContent = "Edit";
  foodLocation = index;
  foods.splice(index, 1);
}

// create new food=========================================================================

function onCreate() {
  let get_title = document.querySelector("#title");
  let get_text = document.querySelector("#text");
  let get_much = document.querySelector("#much");
  let get_currency = document.querySelector("#currency");

  let check_userinput = get_title.value && get_text.value && get_much.value && get_currency;
  let input_field = [get_title, get_text, get_much,get_currency];
  if (!(check_userinput)) {
      for (let input of input_field) {
          if (!(input.value)){
              input.style.border = "2px solid red";
          }
          else {
              input.style.border = "2px solid green";

          }
      }
  }
  else{
    
    hide(dom_fooddialog);
    let add_food = {};
    add_food.title = document.querySelector("#title").value;
    add_food.description = document.querySelector("#text").value;
    add_food.price = document.querySelector("#much").value;
    add_food.currency = document.querySelector("#currency").value;
    add_food.image = link_image;
    
    foods.splice(foodLocation, 0, add_food);
    saveFood();
    createListfood();

    let create = document.querySelector("#create");
    create.textContent = "Edit";
  
    
    document.querySelector("#title").value = "";
    document.querySelector("#text").value = "";
    document.querySelector("#much").value = "";
    document.querySelector("#currency").value = "";
  }  
  

}
// create event food=============================================================


// Get image
get_image.addEventListener('change', function(event) {
  getImage(this);
});

// show dialog
add_food.addEventListener("click",onAddFood)

// close dialog
cancel.addEventListener("click",onCancel)

// create dialog
create_food.addEventListener("click",onCreate)


// saveFood();
loadFood();
createListfood();