const cores = new Set();

cores.add("vermelho");
cores.add("verde");
cores.add("azul");

console.log(cores.values())

cores.add("amarelo");

//nao adiciona itens repeetidos
cores.add("vermelho");

console.log(cores.values());

console.log(`A cor verde existe em cores: ${cores.has("verde")}`);

cores.delete("azul");

console.log(cores.values());

console.log(`Total de itens no Set Cores: ${cores.size}`);

const numeros = new Set([10, 20, 30]);

numeros.forEach((item) => {
    console.log(item);
})

const numerosArray = []
let i = 0;
numeros.forEach(item => {
    numerosArray[i] = item;
    i++;
})

console.log(numerosArray);


// implemente uma função que retorne um novo Set com todas as frutas dos dois conjuntos (união).
const fruits1 = new Set(['apple', 'banana', 'kiwi']);
const fruits2 = new Set(['banana', 'orange', 'kiwi']);

function mixSets (set1, set2) {

    const arraySet1 = [];
    const arraySet2 = [];

    let i = 0;

    set1.forEach(item => {
        arraySet1[i] = item;
        i++;
    });

    set2.forEach(item => {
        arraySet1[i] = item;
        i++;
    });

    return new Set(arraySet1, arraySet2);
}

fruitsTotal = mixSets(fruits1, fruits2);

console.log(fruitsTotal);

const setAbacaxi = new Set("Abacaxi");
//tera 6 elementos, pois o set divide cada caractere da string em elementos unicos e remove as repeticoes

console.log(setAbacaxi)

const obj1 = { id: 1 };
const obj2 = { id: 1 };
const setObjetos = new Set([obj1, obj2, obj1]);
//setObjetos tera 2 elementos, pois nao permite repeticoes de elementos
console.log(setObjetos)