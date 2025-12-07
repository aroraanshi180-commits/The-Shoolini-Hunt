// Wait for the DOM to load to ensure the element exists
document.addEventListener('DOMContentLoaded', () => {

    // 1. Select the link by its ID
    const huntLink = document.getElementById('startHuntLink');

    // 2. Check if the element exists to avoid errors
    if (huntLink) {
        
        // 3. Add the click event listener
        huntLink.addEventListener('click', function(event) {
            
            // OPTIONAL: Stop the link from opening immediately
            // (Use this if you want to do calculations or checks first)
            event.preventDefault();

            console.log("Start button clicked! Running logic...");

            // --- ADD YOUR CUSTOM LOGIC HERE ---
            // Example: Save a flag that the game has started
            // sessionStorage.setItem('gameStarted', 'true');
            // alert("Let the hunt begin!");

            // 4. Manually redirect to the href location after your code runs
            // 'this.href' gets the URL from your HTML tag automatically
            window.location.href = this.href; 
        });
    }
});