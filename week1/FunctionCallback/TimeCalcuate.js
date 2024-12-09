const startTime = performance.now(); // Record high-precision timestamp

setTimeout(() => {
    const endTime = performance.now(); // Record high-precision timestamp in the callback
    const elapsed = endTime - startTime; // Calculate the elapsed time
    console.log(`Elapsed time: ${elapsed.toFixed(2)} ms`);
}, 2000); // Schedule with a 2000 ms delay
