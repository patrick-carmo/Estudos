const regex = {
    nome: /^(?!\s+$)[A-ZÀ-Ú\s]{10,}$/,
    login: /^[A-Za-z0-9]{5}$/,
    endereco: /^(?![.,\s])[\wÀ-ÿ.,\s-]{5,}$/,
    senha: /\w{7}/,
    confirmarSenha: /\w{7}/,
}

export default regex 