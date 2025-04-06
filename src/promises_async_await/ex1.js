const fetchData = () => {

    return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let execucoes = 0;
                    for(let i = 0; i < 1000000000; i++) {
                        execucoes++;
                    }
                    resolve('Loop funcionou')

                }catch(e) {
                    reject('O loop nao deu certo');
                }
                
            }, 2000);
        }
    )
}

// fetchData().
// then(data => console.log(data)).
// catch(error => console.log(`Erro: ${error}`));

const myPromise = new Promise((resolve, reject) => {
    const nome = "Matheus";

    if (nome === 'Matheus') {
        resolve('Usuario matheus encontrado!');

    } else {
        reject('O usuario matheus nao foi encontrado');
    }
})

// myPromise
// .then((data) => {
//     return data.toUpperCase()
// })
// .then((StringModificada) => {
//     console.log(StringModificada)  
// })
// .catch(err => console.log(`Aconteceu um erro: ${err}`))

//RESOLVER VARIAS PROMESSAS

const resolveAll = Promise.all([myPromise, fetchData()])
.then((data) => {
    console.log(data)   
})
.catch(err => console.log(err))
.then(() => console.log("depois do All"))

//RESOLVER VARIAS PROMESSAS, MAS APENAS A PRIMEIRA QUE FOR RESOLVIDA EH RETORNADA

const resolveAllRace = Promise.race([fetchData(), myPromise])
.then((data) => {
    console.log(data)
})