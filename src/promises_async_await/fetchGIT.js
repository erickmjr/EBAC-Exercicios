const userName = 'erickmjr';
const endpoint = `https://api.github.com/users/${userName}`;
fetch(endpoint, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
})
    .then((response) => { return response.json()})
    .then((data) => {
        console.log(`O nome do usuario eh: ${data.name}`);
    })
    .catch((err) => {
        console.log(`Houve um erro: ${err}`);
    })