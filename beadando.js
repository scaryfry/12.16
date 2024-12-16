// Kiírja a viccet konzolra
function joke() {
    fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('setup').innerHTML = data.setup;
            document.getElementById('punchline').innerHTML = ""; // Clear punchline initially
            
            // Remove existing punchline button if it exists
            const existingButton = document.getElementById('punchline-button');
            if (existingButton) {
                existingButton.remove();
            }
            
            const button = document.createElement('button');
            button.id = 'punchline-button';
            button.innerText = 'Show Punchline';
            button.addEventListener('click', () => {
                document.getElementById('punchline').innerHTML = data.punchline;
            });
            document.getElementById('punchline').parentNode.appendChild(button);
        });
}
