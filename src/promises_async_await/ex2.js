//Reescreva o seguinte codigo usando async/await:

function fetchData() {
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

testePraAtrasar = () => {

    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
    
                let execucoes = 0;
                for(let i = 0; i < 10000000; i++) {
                    execucoes++;
                }
                console.log(`Execucoes de teste para atrasar: ${execucoes}`)
                resolve();
    
            }, 2000)  
        } catch(e) {
            reject(e);
        }
    })
}


fetchData()
    .then((data) => {
        console.log(data);
    })
    .then(async () => {
        await testePraAtrasar();
    })
    .then(() => {
        console.log(`depois do atraso!`)
    })
    .catch(err => { console.error(err)}
)
