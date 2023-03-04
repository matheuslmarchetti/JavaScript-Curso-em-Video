function toGenerate() {
    let number = document.querySelector("input#txtnumber");
    let message = document.querySelector("p#msg");
    if (number.value.length == "") {
        alert("ERROR! Click on 'OK' to receive the explanation.");
        message.innerHTML = "You need to choose a number bigger than 0. Try again!";
        //Block to clear the <select/>
        /* let newDiv = document.createElement("div");
        newDiv.setAttribute("id", "returnresult");
        let newDivContent = document.createTextNode("The result will go appear here.");
        newDiv.appendChild(newDivContent);
        let theSelect = document.querySelector("select#multiplicationresult");
        let parentTheSelect = theSelect.parentNode;
        parentTheSelect.replaceChild(newDiv, theSelect); */
        //Block to clear the <select/>
    } else {
        message.innerHTML = `This is the result of the ${Number(number.value)} Multiplication Table. Check it out below!`;
        let numberValue = Number(number.value);
        let createSelect = document.createElement("select");
        createSelect.setAttribute("id", "multiplicationresult");
        createSelect.setAttribute("size", 20);
        let divResultMsg = document.querySelector("div#resultmsg");
        let parentDivResultMsg = divResultMsg.parentNode;
        parentDivResultMsg.replaceChild(createSelect, divResultMsg);
        //multiplicationresult.innerHTML = "";
        for (let counter = 0; counter <= 10; counter++) {
            let item = document.createElement("option");
            item.text = `${numberValue} x ${counter} = ${numberValue*counter}`;
            createSelect.appendChild(item);
        }
    }
}