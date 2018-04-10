// two boxes on page and button
// 

// domString + printToDom

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML += domString;
};
// player[] is now userArray
// it's not giving anything if it can't access props on the array. the array is player[].
const buildDomString = (userArray) => {
    // make empty string so it can accumulate += stuff
    let domString = "";
    // for loop should after the above
    for(let i = 0; i < userArray.length; i++) {
    domString += `<div class="col-md-6">`;
    domString += `<h3>${userArray[i].name}</h3>`;
    domString += `<img class="resize-img" src="${userArray[i].gravatar_url}">`;
    domString += `<h3>${userArray[i].points.total}</h3>`;
    domString += `</div>`;
    }
    printToDom(domString, "output");
    winnerNow(userArray);
}

const winnerNow = (userArray) => {
    let user1 = userArray[0].points.total;
    let user2 = userArray[1].points.total;
    if (user1 > user2) {
        printWinnerToDom(userArray[0]);
    } else {
        printWinnerToDom(userArray[1]);
    }
}

const printWinnerToDom = (winner) => {
    console.log(winner);
    let winnerString = "";
    winnerString += `<div class="winner">${winner.name} is the winner!<div>`;
    console.log(winnerString);
    winnerString += `<div class="badges-holder">`;
    winner.badges.forEach (badge => {
    winnerString += `<img class="badges" src="${badge.icon_url}">`;
    });
    winnerString += `</div>`;
    printToDom(winnerString, "winner-holder");
}

// 1. eventListener. first thing we need is to have this ready in case it's clicked
// first thing. because you want it to load on page load.
// this activates everything
// passing a function into a function
// convention is that we start by thinking about this
// this is what you would write first. make sure to call it. then test it.
// refer to startPlayer1 XHR call and that one starts player 2 also
const startApplication = () => {
    document.getElementById("btn").addEventListener("click", startPlayer1);
  };
// then call it
  startApplication();




// xhr -- put at bottom

function totalFail() {
    console.log("something is gravely rong");
}

// set up xhr request for first player to get their info from treehouse. execute.
function startPlayer1() {
    let user1Name = document.getElementById("user-1").value;
    let request1 = new XMLHttpRequest();
    request1.addEventListener("load", executeThisCodeAfterPlayer1FileLoaded);
    request1.addEventListener("error", totalFail);
    request1.open("GET", "https://teamtreehouse.com/" + user1Name + ".json");
    request1.send();
}

// set up xhr request for second player. execute.
// we gonna call data one in the place of weGonna...
function startPlayer2(weGonnaCallPlayer1) {
    let user2Name = document.getElementById("user-2").value;
    let players = [];
    let request2 = new XMLHttpRequest();
    request2.addEventListener("load", executeThisCodeAfterPlayer2FileLoaded);
    request2.addEventListener("error", totalFail);
    request2.open("GET", "https://teamtreehouse.com/" + user2Name + ".json");
    request2.send();
        // the below needs to be in this function so we have access to both at same time. we're gonna make an array of both objects. in the end that's what we need to build our domString and print the badges.
        function executeThisCodeAfterPlayer2FileLoaded () {
            const data2 = JSON.parse(this.responseText);
            players.push(weGonnaCallPlayer1, data2);
            buildDomString(players);
        }
}
// make object from JSON file of player 1 data
// in data1 it is now a JS object
// we're gonna pass it into the next XHR call so it takes it with it
function executeThisCodeAfterPlayer1FileLoaded () {
    const data1 = JSON.parse(this.responseText);
    startPlayer2(data1);  // we pass player 1 data into player 2 while we get player 2 so we can make an array of both of them to compare later. both will be in one function. this makes sure not happen at same time.
    // this makes certain player 1's data loads so we call player 2 here once that is sure
}



