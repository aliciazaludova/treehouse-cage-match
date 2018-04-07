const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

// eventListner

document.getElementById("btn").addEventListener("click", startApp);
document.getElementById("btn").addEventListener("click", startPlayer2);


// xhr

function totalFail() {
    console.log("something is gravely rong");
}

// set up xhr request for first player. execute.
function startApp() {
    let userName = document.getElementById("user-1").value;
    let request1 = new XMLHttpRequest();
    request1.addEventListener("load", executeThisCodeAfterPlayer1FileLoaded);
    request1.addEventListener("error", totalFail);
    request1.open("GET", "https://teamtreehouse.com/" + userName + ".json");
    request1.send();
}

// set up xhr request for second player. execute.
function startPlayer2() {
    let userName = document.getElementById("user-2").value;
    let request2 = new XMLHttpRequest();
    request2.addEventListener("load", executeThisCodeAfterPlayer2FileLoaded);
    request2.addEventListener("error", totalFail);
    request2.open("GET", "https://teamtreehouse.com/" + userName + ".json");
    request2.send();
}

function executeThisCodeAfterPlayer1FileLoaded () { const data = JSON.parse(this.responseText);
    buildDomString(data);

}

function executeThisCodeAfterPlayer2FileLoaded () { const data = JSON.parse(this.responseText);
    buildDomString(data);
}

