let soma = 0

for (let contador = 1; contador <= 10; contador++){
    let numero = Number(prompt("Digite o " + contador + " º número:" ));
    soma += numero;
}

alert("Soma total: " + soma);