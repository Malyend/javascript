
function login() {

    let userName = prompt("Who's there?", "")

    if (userName === "Admin") {

        let password = prompt("password?", "");

        if (password === 'TheMaster') {
            alert("Welcome! ");
        } else if (password == '' || password === null) {
            alert("Cancelled");
        } else {
            alert('wrong password');
        }
    } 
    else if (userName === '' || userName === null){
        alert('Cancelled');
    }
    else {
        alert("I don't know you?")
    }

}