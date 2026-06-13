export async function buscarUsuariosExternos() {
  const resposta = await fetch('https://jsonplaceholder.typicode.com/users')

  if (!resposta.ok) {
    throw new Error(`Erro na requisição: ${resposta.status}`)
  }

  return resposta.json()
}
