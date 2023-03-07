// Button Add
function toAdd() {
    let txtNumber = document.querySelector("#toaddnumber");
    let number = Number(txtNumber.value);
    let toCleanItem = document.querySelector("#itemlist");
    let itemDefault = document.querySelector("#defaultitem");
    if (number == "") {
        alert("You need add a number!");
    } else if (number < 1 || number > 100) {
        alert("You need add a number between 1 and 100.");
    } else {
        itemDefault?.remove();
        toCleanItem?.remove();
        let itemNew = document.createElement("li");
        itemNew.setAttribute( "class", "newli");
        let itemText = document.createTextNode(`You added the number: ${number}.`);
        itemNew.appendChild(itemText);
        let position = document.getElementsByTagName("ul")[0];
        position.appendChild(itemNew);
    }
}
// Button Clean
function toClean() {
    let newli = document.querySelector(".newli");
    let list = document.querySelector("#list").children;
    let itemListFirst = list[0];
    if (itemListFirst) {
        itemListFirst?.remove();
        let itemDefault = document.createElement("li");
        itemDefault.setAttribute("id", "defaultitem")
        let itemText = document.createTextNode(`The numbers added appear here.`);
        itemDefault.appendChild(itemText);
        let position = document.getElementsByTagName("ul")[0];
        position.appendChild(itemDefault);
    } else {
        newli?.remove();
    }
}