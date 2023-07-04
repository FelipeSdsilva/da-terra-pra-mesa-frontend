import axios from "axios";

export const api = axios.create({
    baseURL: "https://projeto-da-terra-pra-mesa.onrender.com"
})

export const login = async (url: any, dados: any, setDado: any) => {
    const resp = await api.post(url, dados)
    setDado(resp.data.token)
}

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
    const resp = await api.post(url, dados)
    setDado(resp.data)
}

export const busca = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

export const buscaSimples = async (url: any, setDado: any) => {
    const resposta = await api.get(url)
    setDado(resposta.data)
}

export const buscaIdSimples = async (url: any, setDado: any) => {
    const resposta = await api.get(url)
    setDado(resposta.data)
}


export const buscaId = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

export const post = async (url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.post(url, dados, header)
    setDado(resposta.data)
}

export const put = async (url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.put(url, dados, header)
    setDado(resposta.data)
}

export const deleteId = async (url: any, header: any) => {
    await api.delete(url, header)
}