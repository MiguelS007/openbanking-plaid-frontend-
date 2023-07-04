import fetchRequest from './fetchRequest'

import nestedObjectCheck from '../nestedObjectCheck'


const apiRequest = async (address, values) => {
    let response;

    if (address === '/api/auth') {
        response = await fetchRequest(address, {
            method: 'GET'
        })
    } else if (address === '/api/link') {
        response = await fetchRequest(address, {
            method: 'GET'
        })
    } else if (address === 'api/login') {
        if (nestedObjectCheck(values, 'publicToken')) {
            response = await fetchRequest(address, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ publicToken: values.publicToken })
            })
        } else {
            throw new Error('No public token')
        }
    } else if (address === '/api/logout') {
        response = await fetchRequest(address, {
            method: 'GET',
            credentials: 'include'
        })
    } else {
        throw new Error('Wrong method or URL')
    }

    return response
}


export default apiRequest
