function subs(a, b) {
    var total = a - b
    alert("Your result is" + " " + total)
}

function mult(a, b) {
    var total = a * b
    alert("Your result is" + " " + total)
}

function divi(a, b) {
    var total = a / b
    alert("Your result is" + " " + total)
}


function reminder(a, b) {
    var total = a % b
    alert("Your result is" + " " + total)
}
// subs(?)  

function dType(check) {
    alert(typeof (check))
}


// =====================
function even(limit) {
    for (var i = 0; i <= limit; i++) {
        // break
    }
    
    if (limit % 2 === 0) {
        alert(limit+ " is an even number.");
    }

    else{
        alert("No " + limit + " Is Not An Even Number")
    }
}
// ============
function odd(limit) {
    for (var i = 0; i <= limit; i++) {
        // break
    }
    
    if (limit % 3 === 0) {
        alert(limit+ " is an odd number.");
    }

    else{
        alert("No " + limit + " Is Not An odd Number")
    }
}
// ============

