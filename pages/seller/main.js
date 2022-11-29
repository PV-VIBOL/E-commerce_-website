let list_food = [
{name_food:""}

]
let dom_food = document.getElementById("food-dialog");
function hide(element) {
    element.style.display = "none";
  }
  
  function show(element) {
    element.style.display = "block";
  }
  
  
  function onAddFood() {
    show(dom_food);
  }
  
  function onCancel(e) {
    hide(dom_food);
  }
  
  function onCreate() {
    hide(dom_food);
  } 
  let cancel = document.querySelector("#cancle"); 
  let create_food= document.querySelector("#create"); 
  let add_food = document.querySelector("#add_food");

  add_food.addEventListener("click",onAddFood)
  cancel.addEventListener("click",onCancel)
  create_food.addEventListener("click",onCreate)
  