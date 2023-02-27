var where = window.prompt("Where are you from?");
var salary = Number(window.prompt("What annual salary?"));
var monthlySalary = salary / 12
document.write(`Did you know <strong>${where}</strong> there are ${where.length} letters!<br>`);
document.write(`${where} in to upper case is: ${where.toUpperCase()}<br>`);
document.write(`Cool! Your monthly salary is: ${monthlySalary.toLocaleString('en', {style: 'currency', currency: 'USD'})}`);