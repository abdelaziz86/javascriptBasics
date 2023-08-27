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
btn.addEventListener("click", function () {
    // var h1 = document.getElementById("hello");
    // h1.textContent = "Goodbye";

    document.getElementById("hello").textContent = "Goodbye";



    // document.getElementById("hello") = "goodbye"; 
    // h1.textContent = "Goodbye"; 
})



