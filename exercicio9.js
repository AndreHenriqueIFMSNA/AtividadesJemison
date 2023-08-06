let numero = 1;

do {
  if (numero % 2 !== 0) {
    numero++;
    continue;
  }

 alert(numero);
  numero++;
} while (numero <= 10);