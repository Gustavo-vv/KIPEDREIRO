// comentário de uma linha 

/* 
comentário de várias linhas
palavras chaves para criação de variáveis no JS
let = variavel que pode ser alterada
const = variavel que não pode ser alterada
*/ 
const formulario = document .getElementById("formulario");
const resultado = document.getElementById("resultado");
let idade = 0; // escopo global
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    idade = document.getElementById("idade").value;
    if(idade < 12){
        // > maior que  ?
        // < menor que ?
        // >= maior ou igual que 
        // <= menor ou igual que ?
        // != diferente que ?
        // !== diferente estritamente que ?
        // == igual oque ?
        // === igual estritatmente ?
        resultado.innerHTML = " Voce é criança";
        let nome = "Voce é criança"; 
        resultado.innerHTML = nome;
     } else if(idade >=12 && idade < 18) {
        resultado.innerHTML = "Voce é adolescente";
        let nome = "Voce é adolescente";
        resultado.innerHTML = nome;
     }else if(idade >= 18 && idade < 60) {
        resultado.innerHTML = "Voce é adulto";
        let nome = "Voce é adulto";
        resultado.innerHTML = nome;
    } else{
        resultado.innerHTML = "Voce é idoso";
        let nome = "Voce é idoso";
        resultado.innerHTML = nome;
    }

}
);