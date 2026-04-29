let soma = 0;

for (let contador = 1; contador <= 5; contador++) {
    let nota = Number(prompt("Digite a " + contador + "ª nota"));
    soma += nota;
} 
let media = soma / 5;

alert("Média: " + media);