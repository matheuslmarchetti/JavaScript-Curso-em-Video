function load() {
    var msg = document.querySelector("div#msg")
    var photos = document.querySelector("div#dawn")
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = `Now are ${hour} hours.`
    if (hour >= 6 && hour < 12) {
        //Morning!
        document.getElementById("imgdefault").src = "https://source.unsplash.com/random/?sunrise";
        document.querySelector("section").style.background = "#fced67d0";
    } else if (hour >= 12 && hour < 16) {
        //Afternoon!
        document.getElementById("imgdefault").src = "https://source.unsplash.com/random/?sun";
        document.querySelector("section").style.background = "#ff9603c9";
    } else if (hour >= 16 && hour <= 18) {
        //Dusk!
        document.getElementById("imgdefault").src = "https://source.unsplash.com/random/?dusk";
        document.querySelector("section").style.background = "#f53702b4";
    } else {
        //Night!
        document.getElementById("imgdefault").src = "https://source.unsplash.com/random/?night"
        document.querySelector("section").style.background = "0c0c0cd0";
        document.querySelector("section").style.color = "white";
    }
}
