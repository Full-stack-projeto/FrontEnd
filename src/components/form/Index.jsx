import Input from "../input/Index"
import Button from "../botao/Index"

export default function Form({
  email,
  senha,
  setEmail,
  setSenha,
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

      <Button text="Entrar" />

    </form>
  )
}