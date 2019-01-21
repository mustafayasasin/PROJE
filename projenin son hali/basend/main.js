

function login(e) {
    e.preventDefault();
    for (let index = 0; index < users.length; index++) {
        if (document.getElementById('exampleInputEmail1').value == users[index].username && document.getElementById('exampleInputPassword1').value == users[index].password) {
            window.location.href = 'index.html'
        } else {
        }

    }

}