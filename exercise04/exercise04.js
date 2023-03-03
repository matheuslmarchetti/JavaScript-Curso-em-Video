function letCount() {
    let start = document.querySelector("input#txtstart")
    let end = document.querySelector("input#txtend")
    let steps = document.querySelector("input#txtsteps")
    let result = document.querySelector("div#result")
    if (start.value.length == 0 || end.value.length == 0 || steps.value.length == 0) {
        result.innerHTML = "Impossible to count!"
        alert("ERRO!");
    } else {
        result.innerHTML = "Counting: <br>"
        let startvalue = Number(start.value)
        let endvalue = Number(end.value)
        let stepsvalue = Number(steps.value)
        if (stepsvalue <= 0) {
            alert("Invalid step! Considering Steps = 1.");
            stepsvalue = 1
        }
        if (startvalue < endvalue) {
            //Count Up
            for (let counter = startvalue; counter <= endvalue; counter += stepsvalue) {
                result.innerHTML += ` ${counter} \u{1F449}`;
            }
        } else {
            //Countdown
            for (let counter = startvalue; counter >= endvalue; counter -= stepsvalue) {
                result.innerHTML += ` ${counter} \u{1F449}`;
            }
        }
        result.innerHTML += `\u{1F3C1}`
    }
}
