var area = document.querySelector("div#area");
area.addEventListener("click", clickmouse);
area.addEventListener("mouseenter", entermouse);
area.addEventListener("mouseout", outmouse);
function clickmouse() {
    area.innerText = "Hello!";
    area.style.color = "green";
}
function entermouse() {
    area.innerText = "Enter!";
    area.style.color = "yellow";
}
function outmouse() {
    area.innerText = "Out!";
    area.style.color = "blue";
}