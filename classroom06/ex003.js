var n1 = Number(window.prompt("Enter a number: "));
var n2 = Number(window.prompt("Enter another number: "));
window.alert(`The sum ${n1} with ${n2} will be on the screen click on 'OK'`)
var s = n1 + n2;
var sum = document.querySelector(".sum");
sum.textContent = s;