let numero = 1;

while (true) {
    if (numero % 5 === 0 && numero % 7 === 0) {
        alert("O primeiro número divisível por 5 e 7 é:" + numero);
        break;
    }
    numero++;
}