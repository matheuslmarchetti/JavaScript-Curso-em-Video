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
    let resultItem = document.querySelector("#result"); // Limpar DIV Elements Result
    if (txtNumber.value.length == "") {
        alert("You need add a number!");
    } else if (number < 1 || number > 100) {
        alert("You need add a number between 1 and 100.");
    }  else if (isNumber(number) && !inList(number, theValues)) {
        toCleanItem?.remove();
        // Limpar DIV Elements Result
        while (resultItem.firstElementChild) {
            resultItem.removeChild(resultItem.lastElementChild);
        }
        // Limpar DIV Elements Result
        theValues.push(number);
        let itemNew = document.createElement("li");
        itemNew.setAttribute( "class", "newli");
        let itemNewText = document.createTextNode(`You added the number: ${number}.`);
        itemNew.appendChild(itemNewText);
        let itemNewPosition = document.getElementsByTagName("ul")[0];
        itemNewPosition.appendChild(itemNew);
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
    let resultItem = document.querySelector("#result"); // Limpar DIV Elements Result
    if (newli) {
        newli?.remove() 
        // Limpar DIV Elements Result
        while (resultItem.firstElementChild) {
            resultItem.removeChild(resultItem.lastElementChild);
        }
        // Limpar DIV Elements Result
        theValues.pop(number);
    } else if (firstitem) {
        firstitem?.remove();
        theValues.pop(number);
        let itemList = document.createElement("li");
        itemList.setAttribute( "id", "itemlist");
        let itemListText = document.createTextNode(`The numbers added appear here.`);
        itemList.appendChild(itemListText);
        let itemListPosition = document.getElementsByTagName("ul")[0];
        itemListPosition.appendChild(itemList);
        // Limpar DIV Elements Result
        while (resultItem.firstElementChild) {
            resultItem.removeChild(resultItem.lastElementChild);
        }
        // Limpar DIV Elements Result
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
        // Limpar DIV Elements Result
        while (result.firstElementChild) {
            result.removeChild(result.lastElementChild);
        }
        // Limpar DIV Elements Result
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
}