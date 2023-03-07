// Settings Global
let theValues = [];
let txtNumber = document.querySelector("#toaddnumber");
function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}
function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}
// Button Add
function toAdd() {
    let number = Number(txtNumber.value);
    let toCleanItem = document.querySelector("#itemlist");
    let resultItem = document.querySelector(".itemdivresult"); // Limpar DIV Result
    if (txtNumber.value.length == "") {
        alert("You need add a number!");
    } else if (number < 1 || number > 100) {
        alert("You need add a number between 1 and 100.");
    }  else if (isNumber(number) && !inList(number, theValues)) {
        toCleanItem?.remove();
        resultItem?.remove(); // Limpar DIV Result
        theValues.push(number);
        let itemNew = document.createElement("li");
        itemNew.setAttribute( "class", "newli");
        let itemText = document.createTextNode(`You added the number: ${number}.`);
        itemNew.appendChild(itemText);
        let position = document.getElementsByTagName("ul")[0];
        position.appendChild(itemNew);
        let list = document.querySelector("ul#list");
        let itemFirstLi = list.getElementsByTagName("li")[0];
        itemFirstLi.setAttribute("class" , "firstitem");
    } else {
        alert("This number already gone added! You need to insert other number.");
    }
    txtNumber.value = "";
    txtNumber.focus();
}
// Button Clean
function toClean() {
    let number = Number(txtNumber.value);
    let newli = document.querySelector(".newli");
    let firstitem = document.querySelector(".firstitem");
    let resultItem = document.querySelector(".itemdivresult"); // Limpar DIV Result
    if (newli) {
        newli?.remove() 
        resultItem?.remove(); // Limpar DIV Result
        theValues.pop(number);
    } else if (firstitem) {
        firstitem?.remove();
        theValues.pop(number);
        let itemList = document.createElement("li");
        itemList.setAttribute( "id", "itemlist");
        let itemListText = document.createTextNode(`The numbers added appear here.`);
        itemList.appendChild(itemListText);
        let position = document.getElementsByTagName("ul")[0];
        position.appendChild(itemList);
        resultItem?.remove();
    }
    txtNumber.focus();
}
// Button Finalize
let result = document.querySelector("#result");
let buttonFinalize = document.querySelector("#buttonfinalize");
buttonFinalize.onclick = function toFinalize() {
    if (theValues.length == 0) {
        alert("You need to add a number, before to finalize.");
    } else {
        let totalElements = theValues.length;
        result.innerHTML += `<p class="itemdivresult">We have a total of the ${totalElements} numbers registered.`
    }   
}