// Listen for any key press
window.addEventListener('keydown', (event) => {
    // Display the key code inside the box
    document.getElementById('key-code').textContent = event.which;
  
    // Display the key information
    document.getElementById('code').textContent = event.code;
    document.getElementById('key').textContent = event.key;
    document.getElementById('which').textContent = event.which;
  });