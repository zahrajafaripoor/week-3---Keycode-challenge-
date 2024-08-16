window.addEventListener('keydown', (event) => {
    //  the key code in the large box
    document.getElementById('key-code').textContent = event.which;
  
    //  the information in the boxes
    document.getElementById('code').textContent = event.code;
    document.getElementById('key').textContent = event.key;
    document.getElementById('which').textContent = event.which;
  });