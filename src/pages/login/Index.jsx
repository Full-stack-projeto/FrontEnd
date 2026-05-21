import { useState } from "react"
import Form from '../../components/form/Index'
import "./login.css"

export default function Login() {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    console.log(email, senha)
  }

  return (
    <div className="Login">

      <div className="Formulario">
          <h1>Acesso às Doações</h1>
          <p>Entre para iniciar as doações </p>
          <Form
            email={email}
            senha={senha}
            setEmail={setEmail}
            setSenha={setSenha}
            handleSubmit={handleSubmit}
          />
          <p>Esqueceu sua senha?</p>
          <p>Não tem conta?</p>
      </div>

    </div>
  )
}