const signinForm = document.querySelector('form')
const signin = async (username, password) => {
    console.log(username, password);
    try {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
                expiresInMins: 60, // optional
            })
        })
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

const setTokenCookie = (token, expirationMinutes) => {
    const date = new Date();
    date.setTime(date.getTime() + (expirationMinutes * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = "token=" + token + "; " + expires + "; path=/";
}

signinForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const usernameInput = document.getElementById('username')
    const passwordInput = document.getElementById('password')
    const response = await signin(usernameInput.value, passwordInput.value);
    if (response.message == 'Invalid credentials') {
        console.log('invalid');
    }
    const { token } = response
    const expirationMinutes = 60
    console.log(token);
    setTokenCookie(token, expirationMinutes)
    console.log(response);
    window.location.href = '../index.html';

})


if (window.location.pathname === '/pages/login.html' && token) {
    window.location.href = '../index.html';
}
