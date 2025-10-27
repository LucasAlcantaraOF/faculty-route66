document.addEventListener("DOMContentLoaded", () => {
  // Captura o link "Cadastre-se aqui!"
  const registerLink = document.querySelector('#component-form a[href="./register.html"]');
  if (!registerLink) return;

  registerLink.addEventListener("click", (e) => {
    e.preventDefault();

    const component = document.getElementById("component-form");
    if (!component) return;

    // Substitui TODO o conteúdo da div #component-form por um formulário de cadastro
    component.innerHTML = `
      <div class="d-flex flex-column justify-content-center align-items-center w-100">

        <div class="logo d-flex justify-content-center mb-4">
          <img src="/assets/public/logo-route66-black.png" class="logo-img" alt="Logo Route 66">
        </div>

        <form class="w-75">
          <input class="form-control form-control-lg mb-3" type="text" placeholder="Nome completo" style="font-size: 0.9rem">
          <input class="form-control form-control-lg mb-3" type="email" placeholder="Email" style="font-size: 0.9rem">
          <input class="form-control form-control-lg mb-3" type="password" placeholder="Crie uma senha" style="font-size: 0.9rem">
          <input class="form-control form-control-lg mb-3" type="password" placeholder="Confirme a senha" style="font-size: 0.9rem">

          <div class="form-check mb-4">
            <input class="form-check-input" type="checkbox" id="dadosPermissao">
            <label class="form-check-label" for="dadosPermissao" style="font-size: 0.9rem;">
              Autorizo o uso dos meus dados para cadastro.
            </label>
          </div>

          <div class="pt-4">
            <button class="btn btn-lg w-100" style="font-size: 0.9rem; background-color: #50201c; color: white;">CADASTRAR</button>
          </div>

          <div class="d-flex justify-content-center p-3" style="font-size: 0.8rem">
            <p class="me-2 mb-0">Já possui uma conta?</p>
            <a href="#" id="back-login" style="text-decoration: none; color: black;"><strong>Entrar</strong></a>
          </div>
        </form>
      </div>
    `;

    // Evento para restaurar o formulário original (login)
    const backLink = document.querySelector("#back-login");
    backLink.addEventListener("click", (e) => {
      e.preventDefault();

      component.innerHTML = `
        <div class="d-flex flex-column justify-content-center align-items-center w-100">

          <div class="logo d-flex justify-content-center mb-4">
            <img src="/assets/public/logo-route66-black.png" class="logo-img" alt="Logo Route 66">
          </div>

          <form class="w-75" action="dashboard.html">
            <input class="form-control form-control-lg mb-3" type="email" placeholder="Email" style="font-size: 0.9rem">
            <input id="password" class="form-control form-control-lg mb-3" type="password" placeholder="Senha" style="font-size: 0.9rem">

            <a href="#" class="d-flex justify-content-start" style="text-decoration: none; color: black; font-size: 0.9rem;">Esqueceu sua senha?</a>

            <div class="pt-4">
              <button class="btn btn-lg w-100" style="font-size: 0.9rem; background-color: #50201c; color: white;">ENTRAR</button>
            </div>

            <div class="d-flex justify-content-center p-3" style="font-size: 0.8rem">
              <p class="me-2 mb-0">Não possui uma conta?</p>
              <a href="./register.html" style="text-decoration: none; color: black;"><strong>Cadastre-se aqui!</strong></a>
            </div>
          </form>
        </div>
      `;

      // Reanexa o evento novamente para permitir o fluxo reversível
      const newRegisterLink = document.querySelector('#component-form a[href="./register.html"]');
      if (newRegisterLink) newRegisterLink.addEventListener("click", (ev) => {
        ev.preventDefault();
        registerLink.click(); // Reaproveita a mesma lógica
      });
    });
  });
});
