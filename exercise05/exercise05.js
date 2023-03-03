function toGenerate() {
    let number = document.querySelector("input#txtnumber");
    let message = document.querySelector("p#msg");
    if (number.value.length == "") {
        alert("ERROR! Click on 'OK' to receive the explanation.");
        message.innerHTML = "You need to choose a number bigger than 0. Try again!";
        multiplicationresult.innerHTML = "";
    } else if (Number(number.value) == 0 || Number(number.value) < 0) {
        alert("ERROR! Click on 'OK' to receive the explanation.");
        message.innerHTML = `You chose ${Number(number.value)}. You need to choose a number bigger than 0. Try again!`;
        multiplicationresult.innerHTML = "";
    } else {
        message.innerHTML = `This is the result of the ${Number(number.value)} Multiplication Table. Check it out below!`;
        let numberValue = Number(number.value);
        let multiplicationresult = document.querySelector
        ("select#multiplicationresult");
        multiplicationresult.innerHTML = "";
        for (let counter = 0; counter <= 10; counter++) {
            let select = document.createElement("select")
            select.setAttribute("id", "multiplicationresult")
            let item = document.createElement("option");
            item.text = `${numberValue} x ${counter} = ${numberValue*counter}`;
            multiplicationresult.appendChild(item);
        }
    }
}