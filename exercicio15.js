function numeroPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  const numero = parseInt(prompt("Digite um número inteiro positivo:"));
  
  if (numeroPrimo(numero)) {
   alert(numero + " é um número primo.");
  } else {
    alert(numero + " não é um número primo.");
  }