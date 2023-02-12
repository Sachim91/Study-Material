let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

form.addEventListener("Submit",addItem);
//add item
function addItem(e){
    e.preventDefault();
}

//get input value
let newItem = document.getElementById("item").value;

//create new li
let li = document.createElement("li");

//add class

li.className = "list-group-item";

//add text node with input value

li.appendChild(document.createTextNode(newItem));


//ceate delete buttton

let deleteBtn = document.createElement("button");