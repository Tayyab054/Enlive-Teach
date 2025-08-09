// 1. Select container
const container = document.getElementById('button-container');

// 2. Event delegation: listen on parent
container.addEventListener('click', function(event) {
    // Check if the clicked element is a button
    if (event.target.tagName.toLowerCase() === 'button') {
        alert(`Button clicked: ${event.target.textContent}`);
    }
});

// 3. Add new buttons dynamically
let count = 1;
document.getElementById('add-btn').addEventListener('click', () => {
    const newButton = document.createElement('button');
    newButton.textContent = `Button ${count++}`;
    container.appendChild(newButton);
});
