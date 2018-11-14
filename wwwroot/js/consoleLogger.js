//console.log("This is a log");
//var i = "Derstine";
//if (i === "Derstine") {
//    console.log("Name is Derstine from JavaScript Log .. . .");
//} else {
//    console.log("Name is not Derstine");
//}
//var condition = "false";
//console.log(typeof condition); //this will evaluate to string
//if (condition=="false") {
//    console.log("using ==");
//} else if (condition === false)
//{
//    console.log("using ===");
//}
//
//if (23=="23") {  
//    console.log("===");
//}
//if (23 === 23)
//{
//    console.log("==");
//}
//console.log(i);


var person1 = {
    age: 35,
    height: 160,
    score: function () {
        return this.height + this.age;
    }
};


var person2 = {
    age: 25,
    height: 170,
    score: function() {
        return this.height + this.age;
    }
};

var person3 = {
    age: 24,
    height: 170,
    score: function () {
        return this.height + this.age;
    }
};


var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

function SaySomething(message) {
    return "Hello" + message;
}


var person1Score = person1.height + (person1.age*5);
var person2Score = person2.height + (person2.age*5);
var person3Score = person3.height + (person3.age*5);
if (person1Score > person2Score && person1Score > person3Score) {
    console.log("Person 1 Wins");
} else if (person2Score > person1Score && person2Score > person3Score) {
    console.log("Person 2 Wins");
} else {
    console.log("Person 3 Wins");
}


console.log(SaySomething("Derstine"));
console.log(person1.score());
person1.age = 99;
person1['age'] = 100;
console.log();


var personBirthDate = [1992, 1995, 2001];
var personAge = [];
var pushDaw = [];
for (var start = 0; start < personBirthDate.length; start++) {
    personAge[start] = new Date().getFullYear() - personBirthDate[start];
    if (personAge[start] >= 18) {
        console.log("Person age is greater than or equal to 18");
        pushDaw[start] = true;
    } else {
        console.log("Minor");
        pushDaw[start]=false;
    }
}



