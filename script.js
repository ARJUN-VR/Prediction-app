document.addEventListener("DOMContentLoaded", function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const userGuessInput = document.getElementById("userGuess");
    const checkButton = document.getElementById("checkButton");
    const message = document.getElementById("message");

    checkButton.addEventListener("click", function() {
        const userGuess = parseInt(userGuessInput.value);
        
        if (isNaN(userGuess)) {
            message.textContent = "Please enter a valid number.";
        } else {
            if (userGuess === randomNumber) {
                message.textContent = "Congratulations! You guessed the correct number!";
            } else if (userGuess < randomNumber) {
                message.textContent = "Try a higher number.";
            } else {
                message.textContent = "Try a lower number.";
            }
        }
    });
});


console.log('hihjaskhdfakjdfkasjlsdkfhlfhasfhklfhgfjdsfbdhfhdskfklgskfdhfh');