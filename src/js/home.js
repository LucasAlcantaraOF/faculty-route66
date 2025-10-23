document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");

  // Cria o botão de ver senha com ícone Bootstrap
  const toggleBtn = document.createElement("button");
  toggleBtn.type = "button";
  toggleBtn.innerHTML = `<i class="bi bi-eye-slash"></i>`;
  toggleBtn.style.position = "absolute";
  toggleBtn.style.right = "15px";
  toggleBtn.style.top = "50%";
  toggleBtn.style.transform = "translateY(-50%)";
  toggleBtn.style.border = "none";
  toggleBtn.style.background = "none";
  toggleBtn.style.cursor = "pointer";
  toggleBtn.style.fontSize = "1.4rem";
  toggleBtn.style.color = "#555";

  // Envolve o input em um container para posicionar o botão corretamente
  const wrapper = document.createElement("div");
  wrapper.style.position = "relative";
  passwordInput.parentNode.insertBefore(wrapper, passwordInput);
  wrapper.appendChild(passwordInput);
  wrapper.appendChild(toggleBtn);

  // Alterna a visibilidade da senha
  toggleBtn.addEventListener("click", () => {
    const isHidden = passwordInput.type === "password";
    passwordInput.type = isHidden ? "text" : "password";

    // Troca o ícone
    toggleBtn.innerHTML = isHidden
      ? `<i class="bi bi-eye"></i>`
      : `<i class="bi bi-eye-slash"></i>`;
  });
});
