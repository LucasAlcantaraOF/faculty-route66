// /js/register.js

document.addEventListener("DOMContentLoaded", () => {
  // Captura o link de "Cadastre-se aqui!"
  const registerLink = document.querySelector('a[href="./register.html"]');

  // Se o link existir, adiciona o evento
  if (registerLink) {
    registerLink.addEventListener("click", (e) => {
      e.preventDefault(); // impede o redirecionamento
      const form = registerLink.closest("form"); // pega o form atual

      // Substitui o conteúdo do form por um novo (cadastro)
      form.innerHTML = `
        <input class="form-control form-control-lg mb-3" type="text" placeholder="Nome completo" style="font-size: 0.9rem">
        <input class="form-control form-control-lg mb-3" type="email" placeholder="Email" style="font-size: 0.9rem">
        <input class="form-control form-control-lg mb-3" type="password" placeholder="Crie uma senha" style="font-size: 0.9rem">
        <input class="form-control form-control-lg mb-3" type="password" placeholder="Confirme a senha" style="font-size: 0.9rem">
        
        <div class="form-check mb-4">
            <input class="form-check-input" type="checkbox" value="" id="dadosPermissao">
            <label class="form-check-label" for="dadosPermissao" style="font-size: 0.9rem;">
                Autorizo a utilização dos meus dados para fins de cadastro e contato.
            </label>
        </div>

        <div class="pt-4">
          <button class="btn btn-lg w-100" style="font-size: 0.9rem; background-color: #50201c; color: white;">CADASTRAR</button>
        </div>

        <div class="d-flex justify-content-center p-3" style="font-size: 0.8rem">
          <p class="me-2 mb-0">Já possui uma conta?</p>
          <a href="#" id="back-login" style="text-decoration: none; color: black;"><strong>Entrar</strong></a>
        </div>
      `;

      // Ao clicar em “Entrar”, volta ao formulário original
      const backLink = form.querySelector("#back-login");
      backLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.reload(); // recarrega a página e restaura o login
      });
    });
  }
});
