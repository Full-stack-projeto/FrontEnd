// Pega botão
const btn = document.getElementById("btnSalvar");

// 🔹 1. Preencher email automaticamente
// (simulando que veio do login)
const emailSalvo = localStorage.getItem("email");

if (emailSalvo) {
  document.getElementById("email").value = emailSalvo;
}

// 🔹 2. Clique no botão
btn.addEventListener("click", () => {

  const email = document.getElementById("email").value;
  const senha = document.getElementById("novaSenha").value;
  const confirmar = document.getElementById("confirmarSenha").value;

  // validações
  if (email === "" || senha === "" || confirmar === "") {
    alert("Preencha todos os campos!");
    return;
  }

  if (senha !== confirmar) {
    alert("As senhas não coincidem!");
    return;
  }

  if (senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres!");
    return;
  }

  // simulação de sucesso
  alert("Senha alterada com sucesso!");

  // volta para login
  window.location.href = "login.html";
});