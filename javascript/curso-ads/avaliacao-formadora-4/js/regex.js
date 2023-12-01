const regex = {
    nome: /^(?!\s+$)[A-ZÀ-Ú\s]{10,}$/,
    nomeMaterno: /^(?!\s+$)[A-ZÀ-Ú\s]{10,}$/,
    login: /^[A-Za-z0-9]{5}$/,
    endereco: /^(Rua|Avenida|Travessa|Av)\s[\wÀ-ÿ.,\s]{9,}$/i,
    celular: /^\+\d{2}\s\(\d{2}\)\s\9\d{4}-\d{4}$/,
    fixo: /^\+\d{2}\s\(\d{2}\)\s(2|3|4|5)\d{3}-\d{4}$/,
    cpf: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
    senha: /\w{7}/,
    confirmarSenha: /\w{7}/,
}

export default regex 