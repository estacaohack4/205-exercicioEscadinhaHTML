let inputCaracter = document.querySelector("#caracter");
let inputTamanho = document.querySelector("#tamanho");

let botao = document.querySelector("button");

botao.onclick = function(){
    let caracter = inputCaracter.value;
    let tamanho = inputTamanho.value;
    let i = 1;
    let escadinha = "";
    console.log(i);
    console.log(tamanho);
    while(i<=tamanho){
        escadinha = escadinha + caracter;
        let resposta = document.createElement("p");
        resposta.style = "margin: 0";
        resposta.innerHTML = escadinha;
        let body = document.querySelector("body");
        body.appendChild(resposta);
        i++;
    }
}