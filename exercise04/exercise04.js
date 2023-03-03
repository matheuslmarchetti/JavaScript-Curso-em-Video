function letCount() {
    let start = document.querySelector("input#txtstart")
    let end = document.querySelector("input#txtend")
    let steps = document.querySelector("input#txtsteps")
    let result = querySelector("div#result")
    if (start.value.length == 0 || end.value.length == 0 || steps.value.length == 0) {
        alert("ERRO!")
    } else {
        result.innerHTML = "Counting:"
    }
}
