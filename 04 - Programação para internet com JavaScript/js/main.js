var nome = "Bruno Arruda";
var idade = 22;
var frase = "Olá Mundo";
// alert('=> ' + nome + ": " + idade)
console.log('=> ' + nome + ": " + idade);
console.log(idade * idade);
console.log(frase.replace("Mundo", "Terra"));
console.log(frase.toLocaleLowerCase());
console.log(frase.toLocaleUpperCase());

var lista = ["Maçã", "Pêra", "Laranja"];
lista.push("Uva");
console.log(lista[1]);
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.toString()[0]);
console.log(lista.join(" | "));

var fruta = {nome: "Maçã", cor: "Vermelha"};
console.log(fruta.nome)
console.log(fruta.cor)
var frutas = [{nome: "Maçã", cor: "Vermelha"}, {nome: "Laranja", cor: "Laranja"}];
console.log(frutas[1].nome)
console.log(frutas[1].cor)

var count = 0;
while(count < 5) {
    console.log(count);
    count++;
}

for(i = 0; i < 5; i++) {
    console.log(i)
}

var d = new Date();
console.log(d.getMonth() + 1);
console.log(d.getDate());
console.log(d.getFullYear());

// var idade = prompt("Qual a sua idade?");

// if(idade >= 18) {
//     alert("maior de idade");
// }else {
//     alert("menor de idade");
// }

function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(11, 12));

function validaIdade(idade) {
    if(idade >= 18){
        return true;
    }else{
        return false;
    }
}

console.log(validaIdade(11));
console.log(validaIdade(18));

function acao() {
    document.getElementById("resposta").innerHTML = "<b>Obrigado</b> por clicar";
}

function redirecionar() {
    window.open("https://www.google.com.br/");
    //window.location.href = "https://www.google.com.br/";
}

function trocar(elemento) {
    elemento.innerHTML = "-- O --";
}

function voltar(elemento) {
    elemento.innerHTML = "-- X --";
}

function load() {
    console.log("-- CARREGOU --")
}

function funcaoChange(elemento) {
    console.log("-- MUDOU "+ elemento.value +" --")
}