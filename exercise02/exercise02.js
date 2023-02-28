function toLoad() {
    var msg = document.querySelector("div#msg")
    var photos = document.querySelector("div#dawn")
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = `Now are ${hour} hours.`
}
