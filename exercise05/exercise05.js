function toGenerate() {
    let number = document.querySelector("input#txtnumber");
    let message = document.querySelector("p#msg");
    let theResult = document.querySelector("select#result");
    if (number.value.length == "") {
        alert("ERROR! Click on 'OK' to receive the explanation.");
        message.innerHTML = "You need to choose a number. Try again!";
        theResult.innerHTML = ""
        let divNew = document.createElement("div");
        let divNewContent = document.createTextNode("The result will appear here.");
        divNew.appendChild(divNewContent);
        let theSelect = document.getElementById("result");
        parentTheSelect = theSelect.parentNode;
        parentTheSelect.replaceChild(divNew, theSelect);
    } else {
        message.innerHTML = `This is the result of the ${Number(number.value)} Multiplication Table. Check it out below!`;
        let numberValue = Number(number.value);
        let counter = 0;
        theResult.innerHTML = ""
        while (counter <= 10) {
            let item = document.createElement("option");
            item.text = `${numberValue} x ${counter} = ${numberValue*counter}`;
            item.value = `theResult${counter}`
            theResult.appendChild(item);
            counter++
        }
    }
}