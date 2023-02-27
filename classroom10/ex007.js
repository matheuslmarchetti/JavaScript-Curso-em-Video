function add() {
    var tn1 = document.querySelector("input#txtn1");
    var tn2 = document.querySelector("input#txtn2");
    var res = document.querySelector("div#res");
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s =  n1 + n2;
    res.innerHTML = `The sum result is ${s}.`;
}