//var person = {
//    firstName: "Joseph",
//    lastName: "Foxer",
//    age: 25,
//    eyeColor: "blue"
//}

//document.getElementById("result").innerHTML = 
//person.firstName + " " + person.lastName;

var person = {
    firstName: "Joseph",
    lastName: "Foxer",
    age: 30,
    eyeColor: "blue",
    fullName: function() {
        return "His name is " +person.firstName + " " + person.lastName + ".";
    },
    ageText: function() {
        return "He is " + person.age + " years old.";
    }
}

document.getElementById("result").innerHTML = 
person.fullName() + " " + person.ageText();