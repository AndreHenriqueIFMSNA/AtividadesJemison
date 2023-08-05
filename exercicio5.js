const valor = prompt("Digite um valor");

if(isNaN(valor) == true){
    alert("Valor inválido");
}else{

}

if(valor >0){
    alert("Valor digitado é positivo!");
}else if(valor == 0){
    alert("Valor digitado é zero!");
}else if(valor <0){
    alert("Valor digitado é negativo!");
}