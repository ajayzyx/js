let count = 30;

function countdown() {
    console.log(count);
    count--;

    if (count >= 0) {
        setTimeout(countdown, 1000); // Call the function every 1 second
    } else {
        console.log("Countdown Complete!");
    }
}

countdown(); // Start the countdown
