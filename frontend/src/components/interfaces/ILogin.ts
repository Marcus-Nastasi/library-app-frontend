export default interface ILogin {
    data: Array<LoginData>
}

interface LoginData {
    token: string,
    cpf: string
}

