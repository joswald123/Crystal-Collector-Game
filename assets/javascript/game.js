$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    let total = 0;
    var computerNumber = 0;

    var randomNumberUser1 = Math.floor(Math.random() * 12) + 1;
    var randomNumberUser2 = Math.floor(Math.random() * 12) + 1;
    var randomNumberUser3 = Math.floor(Math.random() * 12) + 1;
    var randomNumberUser4 = Math.floor(Math.random() * 12) + 1;

    
    var winsText = $("#wins-text")
    var lossesText = $("#losses-text")



//Random number between 19 - 120.

    function createRandomNumber() {
        return Math.floor(Math.random() * 101) + 19;

    }

// Crystal random numbers between 1-12.

    function createNumberUser() {
        return Math.floor(Math.random() * 12) + 1;
    }

    function refreshScore() {
        $("#total-user").text(total)
    }


// Computer random Number in the display

    computerNumber = createRandomNumber()
    $("#random-number").text(computerNumber);

// Conditions in the game

    const checkIfEqual = (num1, num2) => {

    //  console.log('total = ' + num1 + '; comparing to: ' + num2)
    
     if (num1 === num2) {
            wins++;
            alert('YOU WIN')
            winsText.text("Your total wins: " + wins);
            resetGame()
            $("#random-number").text(computerNumber)

        }

        if (num1 > num2) {
            losses++;
            alert("You Lost");
            lossesText.text("Your total losses: " + losses);
            resetGame()
            $("#random-number").text(computerNumber)
        }

        refreshScore()


    }

// 4 crystals buttons, each buttons has a random number (1-12)

    $("#random-button1").on("click", () => {
        total += randomNumberUser1;
        checkIfEqual(total, computerNumber)

    });

    $("#random-button2").on("click", () => {
        total += randomNumberUser2;
        checkIfEqual(total, computerNumber)

    });

    $("#random-button3").on("click", () => {
        total += randomNumberUser3;
        checkIfEqual(total, computerNumber)

    });

    $("#random-button4").on("click", () => {
        total += randomNumberUser4;
        checkIfEqual(total, computerNumber)

    });

    // function to reload the random numbers

    function resetGame() {

        randomNumberUser1 = createNumberUser()
        randomNumberUser2 = createNumberUser()
        randomNumberUser3 = createNumberUser()
        randomNumberUser4 = createNumberUser()

        computerNumber = createRandomNumber()
        $("#random-number").text(computerNumber);

        total = 0;
        $("#total-user").text(total)


    }




});


