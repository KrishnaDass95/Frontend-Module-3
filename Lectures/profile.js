if(!localStorage.getItem('email') && !localStorage.getItem('password')){
    window.location.href = './index.html'
}

document.getElementById('emailProfile').textContent = 'email is ' + localStorage.getItem('email');
document.getElementById('passwordProfile').textContent = 'password is ' + localStorage.getItem('password');