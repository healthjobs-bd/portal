const button = document.getElementById('colorButton');

button.addEventListener('click', () => {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

<script>
    function performSearch() {
        // 1. Get the text from the search box
        let input = document.getElementById('jobSearchInput').value.toLowerCase();
        
        // 2. Get all the job cards
        let cards = document.getElementsByClassName('job-card');
    
        // 3. Loop through cards and hide those that don't match
        for (let i = 0; i < cards.length; i++) {
            let title = cards[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
            let org = cards[i].innerText.toLowerCase(); // Searches organization & details too
            
            if (title.includes(input) || org.includes(input)) {
                cards[i].style.display = ""; // Show
            } else {
                cards[i].style.display = "none"; // Hide
            }
        }
    }
    
    // Optional: Make it search instantly while typing
    document.getElementById('jobSearchInput').addEventListener('keyup', performSearch);
    </script>
