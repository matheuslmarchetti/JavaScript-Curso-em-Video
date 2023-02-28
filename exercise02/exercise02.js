function load() {
    var msg = document.querySelector("div#msg")
    var photos = document.querySelector("div#dawn")
    var date = new Date()
    //var hour = date.getHours()
    var hour = 17
    msg.innerHTML = `Now are ${hour} hours.`
    if (hour >= 6 && hour < 12) {
        //Morning!
        document.getElementById("imgdefault").src = "https://source.unsplash.com/random/?sunrise";
    } else if (hour >= 12 && hour < 16) {
        //Afternoon!
        document.getElementById("imgdefault").src = "https://source.unsplash.com/random/?sun";
    } else if (hour >= 16 && hour <= 18) {
        //Dusk!
        document.getElementById("imgdefault").src = "https://source.unsplash.com/random/?dusk";
    } else {
        //Night!
        document.getElementById("imgdefault").src = "https://source.unsplash.com/random/?night"
    }
}
