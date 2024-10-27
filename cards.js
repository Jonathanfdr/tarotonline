const waiteSmith = ["O Louco",
    "O Mago",
    "A Sacerdotisa",
    "A Imperatriz",
    "O Imperador",
    "O Hierofante",
    "Os Amantes",
    "O Carro",
    "A Força",
    "O Eremita",
    "A Roda da Fortuna",
    "A Justiça",
    "O Enforcado",
    "A Morte",
    "A Temperança",
    "O Diabo",
    "A Torre",
    "A Estrela",
    "A Lua",
    "O Sol",
    "O Julgamento",
    "O Mundo",
    "Ás de Paus",
    "Dois de Paus",
    "Três de Paus",
    "Quatro de Paus",
    "Cinco de Paus",
    "Seis de Paus",
    "Sete de Paus",
    "Oito de Paus",
    "Nove de Paus",
    "Dez de Paus",
    "Pajem de Paus",
    "Cavaleiro de Paus",
    "Rainha de Paus",
    "Rei de Paus",
    "Ás de Copas",
    "Dois de Copas",
    "Três de Copas",
    "Quatro de Copas",
    "Cinco de Copas",
    "Seis de Copas",
    "Sete de Copas",
    "Oito de Copas",
    "Nove de Copas",
    "Dez de Copas",
    "Pajem de Copas",
    "Cavaleiro de Copas",
    "Rainha de Copas",
    "Rei de Copas",
    "Ás de Espadas",
    "Dois de Espadas",
    "Três de Espadas",
    "Quatro de Espadas",
    "Cinco de Espadas",
    "Seis de Espadas",
    "Sete de Espadas",
    "Oito de Espadas",
    "Nove de Espadas",
    "Dez de Espadas",
    "Pajem de Espadas",
    "Cavaleiro de Espadas",
    "Rainha de Espadas",
    "Rei de Espadas",
    "Ás de Ouros",
    "Dois de Ouros",
    "Três de Ouros",
    "Quatro de Ouros",
    "Cinco de Ouros",
    "Seis de Ouros",
    "Sete de Ouros",
    "Oito de Ouros",
    "Nove de Ouros",
    "Dez de Ouros",
    "Pajem de Ouros",
    "Cavaleiro de Ouros",
    "Rainha de Ouros",
    "Rei de Ouros",
];

const cigano = [
    "O Cavaleiro",        // 01
    "O Trevo",           // 02
    "O Navio",           // 03
    "A Casa",            // 04
    "A Árvore",          // 05
    "As Nuvens",         // 06
    "A Serpente",        // 07
    "A Cova",            // 08
    "A Flor",            // 09
    "A Foice",           // 10
    "O Chicote",         // 11
    "O Pássaro",         // 12
    "A Criança",         // 13
    "A Raposa",          // 14
    "O Urso",            // 15
    "A Estrela",         // 16
    "A Cegonha",         // 17
    "O Cachorro",        // 18
    "A Torre",           // 19
    "O Jardim",          // 20
    "A Montanha",        // 21
    "O Caminho",         // 22
    "A Rato",            // 23
    "O Coração",         // 24
    "O Anel",           // 25
    "O Livro",           // 26
    "A Carta",           // 27
    "O Homem",          // 28
    "A Mulher",           // 29
    "Os Lírios",             // 30
    "O Sol",             // 31
    "A Lua",         // 32
    "A Chave",          // 33
    "Os Peixes",             // 34
    "A Âncora",             // 35
    "A Cruz"             // 36
];


const waiteSmithSelects = document.querySelectorAll('.waiteSmith');
waiteSmithSelects.forEach(select => {
    waiteSmith.forEach((label, index) => {
        const option = document.createElement('option');
        option.value = index; 
        option.textContent = label;
        select.appendChild(option);
    });
});

const ciganoSelects = document.querySelectorAll('.cigano');
ciganoSelects.forEach(select => {
    cigano.forEach((label, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = label;
        select.appendChild(option);
    });
});