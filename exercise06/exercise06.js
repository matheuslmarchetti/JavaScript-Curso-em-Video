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
        let item = document.createElement("li");
        item.setAttribute("id", "newli")
        let itemText = document.createTextNode(`You added the number: ${number}.`);
        item.appendChild(itemText);
        let position = document.getElementsByTagName("ul")[0];
        position.appendChild(item);
    }
}
// Button Clean
function toClean() {
    let newli = document.querySelector("#newli");
    if (!newli) {
        let item = document.createElement("li");
        item.setAttribute("id", "defaultitem")
        let itemText = document.createTextNode(`The numbers added appear here.`);
        item.appendChild(itemText);
        let position = document.getElementsByTagName("ul")[0];
        position.appendChild(item);
    } else {
        newli?.remove();
    }
}