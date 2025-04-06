// SINTAXE 

function primeiraFuncao() {

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("esperou isso aqui!")
            resolve()
        }, 1000);

    })

}

async function segundaFuncao() {
    console.log('iniciou');

    await primeiraFuncao();

    console.log('terminou');
}

// segundaFuncao()


//pratico

function getUser(userName) {

    return fetch(`htps://api.github.com/users/${userName}`)
        .then((data) => data.json())
        .catch((err) => console.log(`Houve um erro - ${err}`));

}

async function showUserName(userName) {

    try {
        const user = await getUser(userName);

        console.log(`O nome do usuario eh: ${user.name}`);
    
    } catch(err) {
        console.log(`Erro: ${err}`)    
    }



}

showUserName('erickmjr');