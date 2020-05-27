window.socket = io('http://localhost');

let username = document.getElementById('usernameField');
let password = document.getElementById('userpassField');
let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function(){
    socket.emit('credentials', {
        username: username.value,
        userpass: password.value
    })
})