fetch('suntzu.json')
  .then(response => response.json())
  .then(data => {
    quotes = data
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
}

function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
}

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quote = quotes[randomIndex];
    const speechBubble = document.querySelector('.speech-bubble');
    speechBubble.textContent = quote;
}

// ADD THIS: Clippy toggle
document.addEventListener('DOMContentLoaded', function() {
    const clippy = document.querySelector('.clippy');
    const toggleButton = document.getElementById('toggle-clippy');

    if (clippy && toggleButton) { // safety check in case either element doesn't exist
        toggleButton.addEventListener('click', function() {
            clippy.classList.toggle('hidden');

            if (clippy.classList.contains('hidden')) {
                toggleButton.textContent = 'Show Clippy';
            } else {
                toggleButton.textContent = 'Hide Clippy';
            }
        });
    }
});
