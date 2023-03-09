
// ===========TERNARY OPERATOR===========//

// ====LEV-1_1=======//

const age = document.getElementById("num")

function checkAge() {
    age.value >= 18 ? document.write("Volljährig") : document.write("Minderjährig")
}

// =====LEV-1_2=======//

let pass = document.getElementById("pw")

// const output = document.getElementById("output")



// function checkPw() {
// const reply = pass.value.length >= 8 ? "Welcome" : "PW 2 short"
// output.innerHTML = "<span>" + reply + "<span>"
// }

function checkPw() {
    pass.value.length >= 8 ? output.innerHTML = "Welcome" : output.innerHTML = "PW 2 short"
    }