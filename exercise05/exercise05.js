function toGenerate() {
    let number = document.querySelector("input#txtnumber");
    let message = document.querySelector("p#msg");
    let theResult = document.querySelector("ul#result");
    if (number.value.length == "") {
        alert("ERROR! Click on 'OK' to receive the explanation.");
        message.innerHTML = "You need to choose a number. Try again!";
        theResult.innerHTML = ""
        let item = document.createElement("li");
        let itemtext = document.createTextNode("The result will appear here.");
        item.appendChild(itemtext);
        let position = document.getElementsByTagName("ul")[0];
        position.appendChild(item);
    } else {
        message.innerHTML = `This is the result of the ${Number(number.value)} Multiplication Table. Check it out below!`;
        let numberValue = Number(number.value);
        let counter = 0;
        theResult.innerHTML = ""
        while (counter <= 10) {
            let item = document.createElement("li");
            let itemtext = document.createTextNode(`${numberValue} x ${counter} = ${numberValue*counter}`);
            item.appendChild(itemtext);
            let position = document.getElementsByTagName("ul")[0];
            position.appendChild(item);
            counter++
        }
    }
} 