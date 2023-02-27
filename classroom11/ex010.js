function add() {
    var txtsd = document.querySelector("input#txtspeed");
    var res = document.querySelector("div#res");
    var speed = Number(txtsd.value);
    res.innerHTML = `<p>Your speed current is<strong> ${speed}Km/h.</strong></p>`
    if (speed > 60) {
        res.innerHTML += `<p>Vou exceeded the allowed speed. <strong>FINED!</strong></p>`
    }
    res.innerHTML += `<p>Drive ever using seat belt!</p>`
}