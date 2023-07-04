import fetchRequest from './fetchRequest'


export default async function fetchRequestWithAuth(address, method='GET', bearerToken) {
    const response = await fetchRequest(address, {
        method: method,
        headers: {
            'Authorization': bearerToken,
        }
    })

    return response
}
