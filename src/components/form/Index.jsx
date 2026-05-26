import Input from "../input/Index"
import Button from "../botao/Index"

export default function Form({
  tipo = "login",
  email, senha, nome, telefone, cpf,
  dataNascimento, cidade, estado, bairro, cep,
  tpusuario,
  setEmail, setSenha, setNome, setTelefone, setCPf,
  setDataNascimento, setCidade, setEstado, setBairro, setCep,
  setTpusuario, setFoto,
  handleSubmit
}) {
  return (
    <form onSubmit={handleSubmit}>

      <label>Email</label>
      <Input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Senha</label>
      <Input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      {tipo === "cadastro" && (
        <>
          <label>Nome Completo</label>
          <Input
            type="text"
            placeholder="Nome Completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label>Telefone</label>
          <Input
            type="tel"
            placeholder="Digite o seu telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />

          <label>CPF</label>
          <Input
            type="text"
            placeholder="Digite seu CPF"
            value={cpf}
            onChange={(e) => setCPf(e.target.value)}
          />

          <label>Data de Nascimento</label>
          <Input
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />

          <label>Cidade</label>
          <Input
            type="text"
            placeholder="Digite sua cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />

          <label>Estado</label>
          <Input
            type="text"
            placeholder="Digite seu estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          />

          <label>Bairro</label>
          <Input
            type="text"
            placeholder="Digite seu bairro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
          />

          <label>CEP</label>
          <Input
            type="text"
            placeholder="Digite seu CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />

          <label>Tipo de Usuário</label>
          <label>
            <input
              type="checkbox"
              checked={tpusuario === "doador"}
              onChange={(e) => setTpusuario(e.target.checked ? "doador" : "recebedor")}
            />
            Doador
          </label>

          <label>Foto de Perfil</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFoto(e.target.files[0])}
          />
        </>
      )}

      <Button text={tipo === "cadastro" ? "Cadastrar" : "Entrar"} />

    </form>
  )
}