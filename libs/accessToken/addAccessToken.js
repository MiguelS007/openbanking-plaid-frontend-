import { setCookie } from 'nookies'


export default function addAccessToken(res, accessToken) {
    return setCookie( {res}, 'accesstoken', accessToken, { httpOnly: true })

}
