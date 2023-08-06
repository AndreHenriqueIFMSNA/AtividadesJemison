function jogoDeAdivinhacao() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
  
    while (true) {
      const tentativa = parseInt(prompt("Digite um número entre 1 e 100:"));
      tentativas++;
  
      if (tentativa === numeroAleatorio) {
        console.log("Parabéns! Você acertou o número em " + tentativas + " tentativas.");
        break;
      } else if (tentativa < numeroAleatorio) {
        console.log("Tente novamente. O número correto é maior.");
      } else {
        console.log("Tente novamente. O número correto é menor.");
      }
    }
  }
  
  jogoDeAdivinhacao();
  