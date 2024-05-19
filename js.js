function checkPassword() {
    var passwordInput = document.getElementById("password");

  

    // Defina a senha desejada
    var senhaCorreta = "12052022";
    if (passwordInput.value === senhaCorreta) {

      passwordInput.disabled = true; // Desativa o campo de senha após o login bem-sucedido
      
      // Redireciona para outra página após 2 segundos (2000 milissegundos)
      setTimeout(function() {
        window.location.href = "https://kaueoliveiradw.github.io/Biblioteca/";
      }, 2000);
    } else {
      // Se a senha estiver incorreta, exiba uma mensagem de erro
      alert("Senha incorreta. Tente novamente.");
    }
  }