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
    let resultItem = document.querySelector("#result"); // Clean DIV Elements Result
    if (txtNumber.value.length == "") {
        alert("You need add a number!");
    } else if (number < 1 || number > 100) {
        alert("You need add a number between 1 and 100.");
    }  else if (isNumber(number) && !inList(number, theValues)) {
        theValues.push(number); // Add Elements Array
        toCleanItem?.remove();        
        let itemNew = document.createElement("li");
        itemNew.setAttribute( "class", "newli");
        let itemNewText = document.createTextNode(`You added the number: ${number}.`);
        itemNew.appendChild(itemNewText);
        let itemNewPosition = document.getElementsByTagName("ul")[0];
        itemNewPosition.appendChild(itemNew);
        let list = document.querySelector("ul#list");
        let itemFirstLi = list.getElementsByTagName("li")[0];
        itemFirstLi.setAttribute("class" , "firstitem");
        // Clean DIV Elements Result
        while (resultItem.firstElementChild) {
            resultItem.removeChild(resultItem.lastElementChild);
        }
        // Clean DIV Elements Result
    } else {
        alert("This number already gone added! You need to insert other number.");
    }
    txtNumber.value = "";
    txtNumber.focus();
}
// Button Remove
function toRemove() {
    let newli = document.querySelector(".newli");
    let firstitem = document.querySelector(".firstitem");
    let listAdded = document.querySelector("#list");
    let resultItem = document.querySelector("#result"); // Clean DIV Elements Result
    if (newli) {
        listAdded.removeChild(listAdded.lastElementChild);
        theValues.pop(); // Delete Elements Array
    } else if (firstitem) {
        firstitem?.remove();
        theValues.pop(); // Delete Elements Array
        //Create LI Element Default
        let itemList = document.createElement("li");
        itemList.setAttribute( "id", "itemlist");
        let itemListText = document.createTextNode(`The numbers added appear here.`);
        itemList.appendChild(itemListText);
        let itemListPosition = document.getElementsByTagName("ul")[0];
        itemListPosition.appendChild(itemList);
        //Create LI Element Default
    }
    // Clean DIV Elements Result
    while (resultItem.firstElementChild) {
        resultItem.removeChild(resultItem.lastElementChild);
    }
    // Clean DIV Elements Result
    txtNumber.focus();
}
// Button Finalize
let result = document.querySelector("#result");
let buttonFinalize = document.querySelector("#buttonfinalize");
buttonFinalize.onclick = function toFinalize() {
    if (theValues.length == 0) {
        alert("You need to add a number, before to finalize.");
    } else {
        // Clean DIV Elements Result
        while (result.firstElementChild) {
            result.removeChild(result.lastElementChild);
        }
        // Clean DIV Elements Result
        let totalElements = theValues.length;
        let bigger = theValues[0];
        let smaller = theValues[0];
        let sum = 0;
        let average = 0;
        for (let theValuesPosition in theValues) {
            sum += theValues[theValuesPosition];
            if (theValues[theValuesPosition] > bigger) {
                bigger = theValues[theValuesPosition];
            }
            if (theValues[theValuesPosition] < smaller) {
                smaller = theValues[theValuesPosition];
            }
        }
        average = sum / totalElements
        result.innerHTML += `<p class="itemdivresult">We have a total of the ${totalElements} numbers registered.</p>`
        result.innerHTML += `<p class="itemdivresult">The bigger number registered was ${bigger}.</p>`
        result.innerHTML += `<p class="itemdivresult">The smaller number registered was ${smaller}.</p>`
        result.innerHTML += `<p class="itemdivresult">The sum of all numbers is: ${sum}.</p>`
        result.innerHTML += `<p class="itemdivresult">The average of the numbers registered is: ${average}.</p>`
    }
    txtNumber.focus();   
}
// Button Clean All
let list = document.querySelector("#list")
let firstitem = document.querySelector(".firstitem");
let buttonCleanAll = document.querySelector("#buttoncleanall");
buttonCleanAll.onclick = function toCleanAll() {
    firstitem?.remove();
    // Clean UL Elements Result
    while (list.firstElementChild) {
        list.removeChild(list.lastElementChild);
        theValues.pop(); // Delete Elements Array
    }
    // Clean UL Elements Result
    //Create LI Element Default
    let itemList = document.createElement("li");
    itemList.setAttribute( "id", "itemlist");
    let itemListText = document.createTextNode(`The numbers added appear here.`);
    itemList.appendChild(itemListText);
    let itemListPosition = document.getElementsByTagName("ul")[0];
    itemListPosition.appendChild(itemList);
    //Create LI Element Default
    // Clean DIV Elements Result
    while (result.firstElementChild) {
        result.removeChild(result.lastElementChild);
    }
    // Clean DIV Elements Result
    txtNumber.focus();
}