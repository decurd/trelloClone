import axios from 'axios'
import router from '../router'

const DOMAIN = 'http://localhost:3000'
const Unauthorized = 401
const onUnauthorized = () => {
    router.push('login')
}

const request = (method, url, data) => {
    return axios( {
        method,
        url: DOMAIN + url,
        data
    }).then(result => result.data)
    .catch(({response}) => {
        const {status} = response
        if (status === Unauthorized) return onUnauthorized()
        throw Error(response)
    })
}

export const setAuthInHeader = token => {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}

export const board = {
    fetch() {
        return request('get', '/boards')
    },

    create(title) {
        return request('post', '/boards', {title})
    }
}

export const auth = {
    login(email, password) {
        return request('post', '/login', {email, password})
    }
}