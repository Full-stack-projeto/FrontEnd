import { useState } from "react"
import Form from "../../components/form/Index"
import  "../cadastro/cadastro.css"

export function Index() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [cpf, setCPf] = useState("")
  const [dataNascimento, setDataNascimento] = useState("")
  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")
  const [bairro, setBairro] = useState("")
  const [cep, setCep] = useState("")
  const [tpusuario, setTpusuario] = useState("comum")
  const [foto, setFoto] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData()
    formData.append("email", email)
    formData.append("senha", senha)
    formData.append("nome", nome)
    formData.append("telefone", telefone)
    formData.append("cpf", cpf)
    formData.append("dataNascimento", dataNascimento)
    formData.append("cidade", cidade)
    formData.append("estado", estado)
    formData.append("bairro", bairro)
    formData.append("cep", cep)
    formData.append("tpusuario", tpusuario)
    if (foto) formData.append("foto", foto)

    fetch("/api/cadastro", {
      method: "POST",
      body: formData
    })
      .then((res) => res.json())
      .then((data) => console.log("Sucesso:", data))
      .catch((err) => console.error("Erro:", err))
  }

  return (
    <Form
      tipo="cadastro"
      email={email}
      senha={senha}
      nome={nome}
      telefone={telefone}
      cpf={cpf}
      dataNascimento={dataNascimento}
      cidade={cidade}
      estado={estado}
      bairro={bairro}
      cep={cep}
      tpusuario={tpusuario}
      setEmail={setEmail}
      setSenha={setSenha}
      setNome={setNome}
      setTelefone={setTelefone}
      setCPf={setCPf}
      setDataNascimento={setDataNascimento}
      setCidade={setCidade}
      setEstado={setEstado}
      setBairro={setBairro}
      setCep={setCep}
      setTpusuario={setTpusuario}
      setFoto={setFoto}
      handleSubmit={handleSubmit}
    />
  )
}