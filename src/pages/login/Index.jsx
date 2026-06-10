import { useState } from "react"
import Form from "../../components/form/Index"
import "../login/login.css"

export default function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    console.log({ email, senha })
    // sua lógica de login aqui
  }

  return (
    <Form
      tipo="login"
      email={email}
      senha={senha}
      setEmail={setEmail}
      setSenha={setSenha}
      handleSubmit={handleSubmit}
    />
  )
}