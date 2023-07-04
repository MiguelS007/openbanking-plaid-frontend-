import fetchRequestWithAuth from './fetchRequestWithAuth'
import destroyAccessToken from '../accessToken/destroyAccessToken'


export default async function fetchRequestWithDeleteToken(res, address, method='GET', bearerToken) {
    const response = await fetchRequestWithAuth(address, 'DELETE', bearerToken)

    destroyAccessToken(res)

    return response
}
