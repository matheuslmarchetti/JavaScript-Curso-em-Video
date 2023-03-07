// Button Add
function toAdd() {
    let txtNumber = document.querySelector("#toaddnumber");
    let number = Number(txtNumber.value);
    let toCleanItem = document.querySelector("#itemlist");
    let results = document.querySelector("#results"); // Limpar DIV Result
    if (number == "") {
        alert("You need add a number!");
    } else if (number < 1 || number > 100) {
        alert("You need add a number between 1 and 100.");
    }  else {
        toCleanItem?.remove();
        results?.remove(); // Limpar DIV Result
        let itemNew = document.createElement("li");
        itemNew.setAttribute( "class", "newli");
        let itemText = document.createTextNode(`You added the number: ${number}.`);
        itemNew.appendChild(itemText);
        let position = document.getElementsByTagName("ul")[0];
        position.appendChild(itemNew);
        let list = document.querySelector("ul#list");
        let itemFirstLi = list.getElementsByTagName("li")[0];
        itemFirstLi.setAttribute("class" , "firstitem");
    }
}
// Button Clean
function toClean() {
    let newli = document.querySelector(".newli");
    let firstitem = document.querySelector(".firstitem");
    let results = document.querySelector("#results"); // Limpar DIV Result
    if (newli) {
        newli?.remove() 
        results?.remove(); // Limpar DIV Result
    } else if (firstitem) {
        firstitem?.remove();
        let itemList = document.createElement("li");
        itemList.setAttribute( "id", "itemlist");
        let itemListText = document.createTextNode(`The numbers added appear here.`);
        itemList.appendChild(itemListText);
        let position = document.getElementsByTagName("ul")[0];
        position.appendChild(itemList);
        results?.remove();
    }
}
// Create Elements Array
let addNumbers = document.querySelector("#toaddnumber");
let arrayNumbers = [];
function createArray() {
    arrayNumbers.push(addNumbers.value);
    console.log(arrayNumbers);
}
// Delete Elements Array
function deleteArray() {
    arrayNumbers.pop();
    console.log(arrayNumbers);
}
// Button Finalize
let buttonFinalize = document.querySelector("#buttonfinalize");
buttonFinalize.onclick = function toFinalize() {
    //return arrayNumbers;
    let itemResult = document.createElement("li");
    itemResult.setAttribute( "class", "result");
    let itemResultText = document.createTextNode(`${createArray()}.`);
    itemResult.appendChild(itemResultText);
    let position = document.getElementsByTagName("ul")[1];
    position.appendChild(itemResult);
}