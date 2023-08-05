const opc = prompt("Digite uma letra");

if( opc == 'a' ||  opc ==  'e' ||  opc ==  'i' || opc == 'o' || opc == 'u'){
    var vogal = opc;
}else if (opc == 'b' || opc == 'c' || opc == 'd' || opc == 'f' || opc == 'g' || opc == 'h' || opc == 'i' || opc == 'j' || opc == 'k' || opc == 'l' ||  opc == 'm' || 
 opc == 'n' || opc == 'p' || opc == 'q' || opc == 'r' || opc == 's' || opc == 't' || opc == 'v' || opc == 'w' || 
 opc == 'x' || opc == 'y' || opc == 'z')
 {
    var consoante = opc;
 }

switch (opc){
    case vogal:
        alert("Parabens você escreveu uma vogal: " + vogal);
    break;

    case consoante:
        alert("Parabens você escreveu uma consoante: "+ consoante);
    break;

    default:
        alert("Você digitou um valor inválido!");
    break;
}


