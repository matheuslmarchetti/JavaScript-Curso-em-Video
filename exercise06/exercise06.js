// Button Add
function toAdd() {
    let txtNumber = document.querySelector("#toaddnumber");
    let number = Number(txtNumber.value);
    let toCleanItem = document.querySelector("#itemlist");
    if (number == "") {
        alert("You need add a number!");
    } else if (number < 1 || number > 100) {
        alert("You need add a number between 1 and 100.");
    } else {
        toCleanItem?.remove();
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
    if (newli) {
        newli?.remove()
    } else if (firstitem) {
        firstitem?.remove()
        let itemList = document.createElement("li");
        itemList.setAttribute( "id", "itemlist");
        let itemListText = document.createTextNode(`The numbers added appear here.`);
        itemList.appendChild(itemListText);
        let position = document.getElementsByTagName("ul")[0];
        position.appendChild(itemList);
    }
}