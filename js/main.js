document.getElementById("logo").onclick = function(evt) {
  touchLogo();
};


function touchLogo() {
    var userName = prompt("What is your name?", "Enter your f'in name here");
    if(userName) {
        alert("Nice to see you here, " + userName + ".");
    }
}

