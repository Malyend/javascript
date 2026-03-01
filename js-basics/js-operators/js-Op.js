



function submitToMe() {

    age = document.getElementById("identification").value; 
    
    if (age >= 14 && age <= 90) {
        window.alert("You pass!")
    }  else {
        window.alert("Die in hell!")
    }
}