import axios from 'axios'
import router from '../router'

const DOMAIN = 'http://localhost:3000'
const UNAUTHORIZED = 401
const onUnauthorized = () => {
    router.push('login')
}

const request = (method, url, data) => {
    return axios( {
        method,
        url: DOMAIN + url,
        data
    }).then(result => result.data)
    .catch(result => {
        console.log(result.response.status);
        
        /** 아래와 같음 */
        // const status = result.response.status
        const {status} = result.response
        if (status == UNAUTHORIZED) {
            onUnauthorized()
        } throw Error(result)
    })
}

export const board = {
    fetch() {
        return request('get', '/boards')
    }
}