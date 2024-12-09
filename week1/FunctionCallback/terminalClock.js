// function displayClock() {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');

//     console.log(`\n   ${hours}:${minutes}:${seconds}`);

// }

// // Start the clock
// displayClock();

function displayClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Overwrite the terminal line
    process.stdout.write(`\r   ${hours}:${minutes}:${seconds}`); // '\r' moves the cursor back to the start of the line

    // Call the function again after 1 second
    setTimeout(displayClock, 1000);
}

// Start the clock
displayClock();
