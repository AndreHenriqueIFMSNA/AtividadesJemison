let numero = 1;

while (true) {
  if (numero % 2 === 0 && numero % 3 === 0 && numero % 5 === 0) {
    alert("O menor número divisível por 2, 3 e 5 é:"+ numero);
    break;
  }
  numero++;
}