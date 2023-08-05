const valor = prompt("Digite um numero");


if(isNaN(valor) == true){
    alert("Você digitou um valor inválido");
}else{



if(valor >= 80){
    alert("Parabéns você tirou nota A");
}else if(valor >=70 && valor <= 79){
    alert("Parabéns você tirou nota B");
}else if(valor >=50 && valor <= 69){
    alert("Parabéns você tirou nota C");
}else if(valor >= 30 && valor <= 49){
    alert("Parabéns você tirou nota D");
}else if(valor >= 29 && valor <= 20){
    alert("Parabéns você tirou nota E");
}else if (valor >=1 && valor <=28){
    alert("Parabéns você tirou nota F")
}

}

