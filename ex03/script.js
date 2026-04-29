let numero = Number(prompt("Digite um número:"));
let mensagem = " ";

for (let contador =1; contador <= 10; contador ++){
    mensagem += numero + " X " + contador + " = " + (numero * contador) + " \ numero";
}
alert(mensagem);