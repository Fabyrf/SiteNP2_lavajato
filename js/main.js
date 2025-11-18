document.addEventListener('DOMContentLoaded', function () {

  // Procura o formulário com o ID 'contactForm'
  var form = document.getElementById('contactForm');

  // Verifica se o formulário existe na página
  if (form) {

    // Adiciona um evento para capturar o envio do formulário
    form.addEventListener('submit', function (e) {
      e.preventDefault();  // Impede o envio padrão do formulário (não recarrega a página)

      // Pega o valor do campo "name".
      // Caso esteja vazio, usa "(sem nome)"
      var name = document.getElementById('name').value || '(sem nome)';

      // Pega a mensagem digitada no campo "message"
      var message = document.getElementById('message').value || '';

      // Número do WhatsApp em formato internacional (sem +)
      var phone = "5561999438150";

      // Monta o texto que será enviado.
      // encodeURIComponent codifica caracteres especiais para funcionar no link
      var texto = encodeURIComponent(
        "Olá! Meu nome é " + name + ".\n" +
        "Mensagem: " + message
      );

      // Monta o link oficial do WhatsApp com o número e a mensagem
      var url = "https://wa.me/" + phone + "?text=" + texto;

      // Abre o WhatsApp Web ou App em uma nova aba
      window.open(url, "_blank");

      // Limpa os campos do formulário após abrir o WhatsApp
      form.reset();
    });
  }
});

