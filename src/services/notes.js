import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/notes'

const getAll = async () => {
    const request = axios.get(baseUrl)
    const nonExisting = {
        id: 10000,
        content: 'This note is not saved to server',
        important: true
    }
    const response = await request
    return response.data.concat(nonExisting)
}

const create = async newObject => {
    const request = axios.post(baseUrl, newObject)
    const response = await request
    return response.data
}

const update = async (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    const response = await request
    return response.data
}

export default { getAll, create, update }