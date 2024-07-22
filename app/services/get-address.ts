import axios from "axios"

type AddressData = {
    bairro: string
    cep: string
    complemento: string
    localidade: string
    logradouro: string
    uf: string
}

export async function getAddress(cep: string): Promise<AddressData | undefined> {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        return response.data as AddressData
    } catch (error) {
        console.error("Error while fetching address data", error)
        return undefined
    }
}
