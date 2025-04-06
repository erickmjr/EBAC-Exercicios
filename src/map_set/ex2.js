// Dado o array [1, 2, 2, 3, 4, 4, 5], use um Set para remover os valores duplicados.

const array = [1, 2, 2, 3, 4, 4, 5];

const mySet = new Set(array);

const arraySemDuplicatas = Array.from(mySet);

console.log(arraySemDuplicatas)