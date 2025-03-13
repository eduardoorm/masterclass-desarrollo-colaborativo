
const login = document.getElementById('login');
login.addEventListener('click', () => {
    const userElement = document.getElementById('username') ; 
    const user = userElement.value ? userElement.value : '';

    console.log(user);
    if(user !== '') {
        document.cookie = `username=${user}`;
        document.location.href = '/';
    }
    else {
        alert('Please enter a username');
    }
})