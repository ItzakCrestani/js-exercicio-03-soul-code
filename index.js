let numberOfUsers = parseFloat(
  prompt('Quantos usuários você deseja cadastrar?')
)

let users = []

for (let i = 1; i <= numberOfUsers; i++) {
  let userStr = {
    name: prompt(`Digite o nome do ${i}° usuário:`),
    age: parseInt(prompt(`Digite a idade do ${i}° usuário:`)),
    sex: prompt(`Digite o sexo do ${i}`),
    occupation: prompt(`Digite a profissão do ${i}° usuário:`)
  }

  users.push(userStr)
  document.write(
    `Nome: ${userStr.name}; Idade: ${userStr.age}; Sexo: ${userStr.sex}; Profissão: ${userStr.occupation}.<br>`
  )
}
