// Crie um Map chamado estoque que mapeia nomes de produtos a suas quantidades:

// Adicione 3 produtos

// Verifique se um produto existe

// Atualize a quantidade de um produto

// Remova um produto

const estoque = new Map();
estoque.set("farinha", 3);
estoque.set("nescau", 40);
estoque.set("bombom", 12);

console.log(estoque.keys());

console.log(estoque.has("farinha"));

console.log(estoque.get("farinha"));

estoque.set("farinha", 4);

console.log(estoque.get("farinha"));

estoque.delete("nescau");

console.log(estoque.has("farinha"));

console.log(estoque.keys());