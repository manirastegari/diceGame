const buttonPressed = () => {
    const userInput = document.querySelector("input").value;
    const userValue = parseInt(userInput);

    if (userValue >= 1 && userValue <= 6) {
        
    } else {
        if (Number.isNaN(userValue) === true) {
            document.querySelector("div").innerHTML =
            '<p class="error">You must enter a number</p>'
            
        } else {
            document.querySelector("div").innerHTML =
            '<p class="error">Please enter a number between 1-6</p>'
        }
        return;
    }

    const computerValue = Math.floor(Math.random()*6) + 1;
    let winner = "";
    if (userValue>computerValue) {
        winner = "Player";        
    } else if (userValue === computerValue){
        winner = "Tie";
    } else if (userValue<computerValue) {
        winner = "Computer";
    }
    
    document.querySelector("div").innerHTML = `
        <div id="grid-container">
            <div>
                <p>Player value: ${userValue}</p>
                <img src="images/dice0${userValue}.png">
            </div>
            <div>
                <p>Computer value: ${computerValue}</p>
                <img src="images/dice0${computerValue}.png">
            </div>
        </div>
        <br>
        <p>Winner is: ${winner}</p>
    `
    document.querySelector("input").value = "";
}

document.querySelector("button").addEventListener("click", buttonPressed);