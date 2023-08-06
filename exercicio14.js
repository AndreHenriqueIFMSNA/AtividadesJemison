do {
    const resposta = confirm("Deseja fechar a mensagem?");
    if (resposta) {
      console.log("Mensagem fechada!");
      break;
    }
  } while (true);