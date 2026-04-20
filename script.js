function performSearch() {
    // 1. Get the search input value
    const input = document.getElementById('jobSearchInput').value.toLowerCase();
    
    // 2. Get all job cards
    const jobCards = document.getElementsByClassName('job-card');

    // 3. Loop through cards and filter
    for (let i = 0; i < jobCards.length; i++) {
        const cardText = jobCards[i].innerText.toLowerCase();
        
        if (cardText.includes(input)) {
            jobCards[i].style.display = "block"; // Show card
        } else {
            jobCards[i].style.display = "none";  // Hide card
        }
    }
}

// Allow searching by pressing "Enter"
document.getElementById('jobSearchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});
