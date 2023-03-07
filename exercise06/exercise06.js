// Button To Add
function toAdd() {
    let txtNumber = document.querySelector("#toaddnumber");
    let number = Number(txtNumber.value);
    let list = document.querySelector("#list");
    let toCleanitem = document.querySelector("#itemlist");
    if (number == "") {
        alert("You need add a number!");
    } else if (number < 1 || number > 100) {
        alert("You need add a number between 1 and 100.");
    } else {
        toCleanitem?.remove();
        let item = document.createElement("li");
        let itemtext = document.createTextNode(`You added the number: ${number}.`);
        item.appendChild(itemtext);
        let position = document.getElementsByTagName("ul")[0];
        position.appendChild(item);
    }
}