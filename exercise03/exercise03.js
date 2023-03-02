function toChecker() {
    var date = new Date()
    var year = date.getFullYear()
    var formYear = document.querySelector("input#txtyear")
    var result = document.querySelector("div#result")
    if (formYear.value.length == 0 || Number(formYear.value) > year) {
        alert("ERROR! Check the data and try again.");
    } else {
        var formGender = document.getElementsByName("radgender")
        var age = year - Number(formYear.value)
        var gender = " "
        var img = document.createElement("img")
        img.setAttribute("id", "photos");
        if (formGender[0].checked) {
            gender = "Female";
            if (age >= 0 && age < 10) {
                //Children
                img.setAttribute("src", "https://source.unsplash.com/random/?child");
            } else if ( age >= 10 && age < 21) {
                //Young
            } else if ( age < 50) {
                //Adult
            } else {
                //Elderly
            }
        } else if (formGender[1].checked) {
            gender = "Male";
            if (age >= 0 && age < 10) {
                //Children
            } else if ( age >= 10 && age < 21) {
                //Young
            } else if ( age < 50) {
                //Adult
            } else {
                //Elderly
            }
        }
        result.innerHTML = `We detected an ${age} year old ${gender}.`
        result.appendChild(img);
    }
}