document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('form');
  const nomeUsuarioInput = document.getElementById('nomeusuario');
  const nomeEmailInput = document.getElementById('nomeEmail');
  const erroNomeElement = document.getElementById('erroNome');
  const erroEmailElement = document.getElementById('erroEmail');


  form.addEventListener('submit', function (event){
    if (nomeUsuarioInput.value.trim() === '') {
        event.preventDefault(); // Impede o envio do formulário
        // Exibe a mensagem de erro
        erroNomeElement.style.display = 'block';
    }

    else{
        //Se o campo não estiver vazio, oculta a mensagem de erro
        erroNomeElement.style.display = 'none';
    }

    if (nomeEmailInput.value.trim() === ''){
      event.preventDefault();
      erroEmailElement.style.display = 'block';
    } else {
      erroEmailElement.style.display = 'none';
    }

    // Validar o campo de e-mail com uma expresão regular ou seja um e-mail valido
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailRegex.test(nomeEmailInput.value.trim())) {
      event.preventDefault();
      erroEmailElement.style.display = 'block';
    } else {
      erroEmailElement.style.display = 'none';
    }
  });
});