//To Add
function toAdd() {
    let txtNumber = document.querySelector("input#toaddnumber");
    let number = Number(txtNumber.value);
    let toCleanitem = document.querySelector("li#itemlist");
    if (number == "") {
        alert("You need add a number!");
    } else if (number < 1 || number > 100) {
        alert("You need add a number between 1 and 100.");
    } else {
        toCleanitem.innerHTML = "";
        let item = document.createElement("li");
        let itemtext = document.createTextNode(`You added the number: ${number}.`);
        item.appendChild(itemtext);
        let position = document.getElementsByTagName("ul")[0];
        position.appendChild(item);
    }
}