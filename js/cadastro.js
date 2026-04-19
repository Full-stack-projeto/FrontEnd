const form = document.getElementById("formCadastro");
const fotoInput = document.getElementById("foto_perfil");
const preview = document.getElementById("preview");

// Preview da imagem
fotoInput.addEventListener("change", () => {
  const file = fotoInput.files[0];
  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
  }
});

// Submit do formulário
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData();

  formData.append("nome", document.getElementById("nome").value);
  formData.append("email", document.getElementById("email").value);
  formData.append("telefone", document.getElementById("telefone").value);
  formData.append("cpf", document.getElementById("cpf").value);
  formData.append("data_nascimento", document.getElementById("data_nascimento").value);

  formData.append("cidade", document.getElementById("cidade").value);
  formData.append("estado", document.getElementById("estado").value);
  formData.append("bairro", document.getElementById("bairro").value);
  formData.append("cep", document.getElementById("cep").value);

  formData.append("tipo_usuario", document.getElementById("tipo_usuario").value);

  formData.append("foto_perfil", fotoInput.files[0]);

  console.log("Dados prontos para envio:", Object.fromEntries(formData));

  // 🔥 FUTURO BACK-END
  /*
  await fetch("http://localhost:3000/usuarios", {
    method: "POST",
    body: formData
  });
  */

  alert("Cadastro preparado para envio!");
});