var p1 = window.document.getElementsByTagName("p")[0];
window.document.write(`It is written like this: ${p1.innerText}`);
p1.style.color = "yellow";
var divMsg = document.getElementById("msg");
divMsg.style.backgroundColor = "gray";
var getName = document.getElementsByName("dom")[0];
getName.style.color = "red";
var p2 = document.querySelector("p#p2");
p2.style.backgroundColor = "purple";