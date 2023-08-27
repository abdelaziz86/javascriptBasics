var myName = "John Doe";

// console.log(myName);

myName = 25;  

// console.log(myName); 

// ============ conditions ============

var score = 80; 
if (score >= 70) {
    // console.log("Exam Passed"); 
} else {
    // console.log("Exam Failed");     
}


// ========= loops ==========
for (var i = 0; i < 10; i++) {
    // console.log(i); 
}


// =========== Array ===========
var names = ["John", 18, "Jane", 25, "Jim"];
// console.log(names[1]); 

// ============= OBJECT =============
var car = {
    type: "Fiat",
    color: "Black",
    Speed: 200
}; 
// console.log(car.type); 

// ============= Function =============
function acceleration(obj) { 
    return obj.Speed * 5;
}

// console.log(acceleration(car)); 



// =========== ACCESSING HTML ELEMENTS ============
// var h1 = document.getElementById("hello") ; 
// console.log("NO EVENT LISTENER : " + h1.textContent);


// ===== Event listeners ===========
document.addEventListener("DOMContentLoaded", function () {
    // var h1 = document.getElementById("hello");
    // console.log("WITH EVENT LSITENER : " + h1.textContent);
});

//=========================================
var btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//     document.getElementById("hello").textContent = "Goodbye";
// })



// =========== fucntion random ===========
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) ;
}



// =========== EXERCICE 1 ============ 
var random = document.getElementById("random");

random.addEventListener("click", function () {
    var min = document.getElementById("min").value ;
    console.log("Minimum is : " + min); 
    
    var max = document.getElementById("max").value;
    console.log("Maximum is : " + max); 

    console.log(getRandomNumber(min, max)); 
    //var result = document.getElementById("result");
    
    document.getElementById("result").textContent = getRandomNumber(min, max);  
}); 








