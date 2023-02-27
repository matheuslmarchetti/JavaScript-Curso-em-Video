function tocheck() {
    var stcountry = document.querySelector("input#txtcountry");
    var res = document.querySelector("div#res");
    var country = String(stcountry.value);
    res.innerHTML = `<p>Cool! You are  living: <strong>${country}</strong></p>`
    if ((country == "Brazil") || (country == "BRA")) {
        res.innerHTML += `<p>You are Brazilian.</p>`
    } else {
        res.innerHTML += `<p>You are Foreigner.</p>`
    }
}