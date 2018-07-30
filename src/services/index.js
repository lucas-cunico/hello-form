module.exports.saveUser = (user) => {
    let body = new FormData();
    Object.keys(user).forEach((key) => body.append(key, user[key]));
    return fetch(`http://localhost:3001/user`, {
        method: 'POST',
        body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}