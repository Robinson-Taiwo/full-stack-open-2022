import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = nameobj => {
    const request = axios.post(baseUrl, nameobj)
    return request.then(response => response.data)
}

const update = (id, nameobj) => {
    const request = axios.put(`${baseUrl}/${id}`, nameobj)
    return request.then(response => response.data)
}

const Delete = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const logger = {
    getAll,
    create,
    update,
    Delete
}

export default logger
