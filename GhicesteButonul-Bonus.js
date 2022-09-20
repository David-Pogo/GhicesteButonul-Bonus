let attempts = 0, elementPozition, valueGenerateButtons = 0, numberOfButon, attemptsProcent = 0, attemptsWin = 0, attemptsLose = 0;

function generateButtons() {
    numberOfButon = numberOfButtons();
    if(valueGenerateButtons == 0 && numberOfButon >= 1) {
    for (let i = 1; i <= numberOfButtons(); ++i) {
        document.getElementById("addButtons").innerHTML += '<button type="button" id = "' + i + '" class = "btn" style = "background-color: red; margin-left:5px; margin-bottom:5px;" onclick = "return messageDisplay(' + i + ');">Incearca</button>';
    }
    document.getElementById("resetElement").innerHTML += '<button type = "button" class = "btn btn-warning" id = "resetValueOfButtons" onclick="return resetValueOfButtons();">Reseteaza doar valoarea butoanelor</button>';
    document.getElementById("resetElement").innerHTML += '<button type = "button" class = "btn btn-warning" id = "resetNumberOfButtons" style = "margin-left:20px;" onclick="return resetNumberOfButtons();">Seteaza un nou numar de butoane</button>';
    document.getElementById("resetValueOfButtons").style.marginTop = "10px";
    document.getElementById("resetNumberOfButtons").style.marginTop = "10px";
    valueGenerateButtons = 1;
    } else if(numberOfButon == 0){
        alert("Introdu o valoare valida pentru a genera butoane!");
        document.getElementById("resetForm").reset();
    } else if(valueGenerateButtons == 1) {
        alert("Pentru a genera butoane trebuie: Sa apesi pe butonul: Seteaza un nou numar de butoane")
    } else {
        alert("Valoarea introdusa: " + numberOfButon + " nu este valida, introdu o valoare valida!");
        document.getElementById("resetForm").reset();
    }
    return false;
}

function messageDisplay(pozition) {
    if(attempts == 0) {
        ++attemptsProcent;
    let message = selectMessage();
    let buttonValue =  document.getElementById(pozition);
    buttonValue.innerHTML = message;
    if(message == 'Mai incearca') {
        buttonValue.style.background = "yellow";
        buttonValue.style.color = "black";
        ++attemptsLose;
        setProcent();
    } else if(message == 'Ai castigat'){
        buttonValue.style.background = "green";
        ++attemptsWin;
        setProcent();
    }
    ++attempts;
    elementPozition = pozition;
    }else if(attempts == 1) {
        alert("Pentru a incerca norocul din nou, apasa pe: Reseteaza doar valoarea butoanelor");
    }
    return false;
}

function selectMessage() {
     let message = ["Mai incearca", "Ai castigat"];
     let index = message[Math.floor(Math.random() * message.length)];
     return index;
}

function resetValueOfButtons() {
    if(attempts != 0) {
        document.getElementById(elementPozition).style.background = "red";
        document.getElementById(elementPozition).innerHTML = "Incearca";
        attempts = 0;
    }
}

function resetNumberOfButtons() { 
    valueGenerateButtons = 0;
    attempts = 0;
    let removeElement = document.getElementById("addButtons");
    for(let i = 1; i <= numberOfButon; ++i) {
    let elementFromDiv = document.getElementById(i);
    removeElement.removeChild(elementFromDiv);
    }
    let removeButtons = document.getElementById("resetElement");
    let removeResetElement = document.getElementById("resetValueOfButtons");
    let removeNumberButtons = document.getElementById("resetNumberOfButtons");
    removeButtons.removeChild(removeResetElement);
    removeButtons.removeChild(removeNumberButtons); 
    document.getElementById("resetForm").reset();
}

function numberOfButtons() {
    var numberOfButtons = document.getElementById("numberOfButtons").value;
    return numberOfButtons;
}

function setProcent() {
    let totalWin = (attemptsWin / attemptsProcent) * 100;
    let totalLose = (attemptsLose / attemptsProcent) * 100;
    document.getElementById("procentWin").style.width = totalWin + "%";
    document.getElementById("procentWin").innerHTML = totalWin + "%";
    document.getElementById("procentLose").style.width = totalLose + "%";
    document.getElementById("procentLose").innerHTML = totalLose + "%";
}

function resetProgressBar() {
    if(attemptsWin != 0 || attemptsLose != 0) {
        attemptsWin = 0, attemptsLose = 0, attemptsProcent = 0;
        document.getElementById("procentWin").style.width = "0%";
        document.getElementById("procentWin").innerHTML = "0%";
        document.getElementById("procentLose").style.width = "0%";
        document.getElementById("procentLose").innerHTML = "0%";
    }
}