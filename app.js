// Seleciona o título da página e altera seu conteúdo para "Hora do Desafio"
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// Seleciona o primeiro botão na página (botão Console)
const botãoConsole = document.querySelector('button:nth-child(1)');

// Adiciona um evento de clique ao botão Console que exibe um alerta
botãoConsole.addEventListener('click', () => {
    alert('O botão foi clicado'); // Exibe um alerta quando o botão é clicado
});

// Seleciona o segundo botão na página (botão Alerta)
const botãoAlerta = document.querySelector('button:nth-child(2)');

// Adiciona um evento de clique ao botão Alerta que exibe uma mensagem divertida
botãoAlerta.addEventListener('click', () => {
    alert('Ihaaaa!!'); // Exibe um alerta com uma mensagem divertida
});

// Seleciona o terceiro botão na página (botão Prompt)
const botãoPrompt = document.querySelector('button:nth-child(3)');

// Adiciona um evento de clique ao botão Prompt que solicita uma entrada e exibe um alerta personalizado
botãoPrompt.addEventListener('click', () => {
    let cidade = prompt('Digite o nome de uma cidade:'); // Solicita o nome de uma cidade ao usuário
    alert(`Estive em ${cidade} e lembrei de você`); // Exibe um alerta com a cidade digitada
});

// Seleciona o quarto botão na página (botão Soma)
const botãoSoma = document.querySelector('button:nth-child(4)');

// Adiciona um evento de clique ao botão Soma que realiza a soma de dois números
botãoSoma.addEventListener('click', () => {
    let numero1 = parseFloat(prompt('Digite um número:')); // Solicita o primeiro número e o converte para número decimal
    let numero2 = parseFloat(prompt('Digite outro número:')); // Solicita o segundo número e o converte para número decimal
    let soma = numero1 + numero2; // Calcula a soma dos dois números
    alert(`O resultado é ${soma}!`); // Exibe o resultado da soma em um alerta
});
