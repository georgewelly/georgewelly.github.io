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
    // const quoteElement = document.getElementById("quote");
    quote = quotes[randomIndex];
    // quoteElement.textContent = quote;
    const speechBubble = document.querySelector('.speech-bubble');
    speechBubble.textContent = quote;
}