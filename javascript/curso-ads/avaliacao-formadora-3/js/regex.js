const regexValidacao = () => {
  const nomeRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]{10,}$/
  const loginRegex = /^[A-Za-z0-9]{5}$/
  const enderecoRegex = /^(?![.,\s])[\wÀ-ÿ.,\s-]{5,}$/
  const senhaRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/
  const idadeRegex = /^(1[6-9]|[2-9]\d|1[01]\d|12[0-9]|130)$/

  const regex = {
    nome: nomeRegex,
    login: loginRegex,
    endereco: enderecoRegex,
    senha: senhaRegex,
    confirmarSenha: senhaRegex,
    idade: idadeRegex,
  }

  return regex
}
