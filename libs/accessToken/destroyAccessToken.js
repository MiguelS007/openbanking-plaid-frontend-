import { destroyCookie } from 'nookies'


export default function destroyAccessToken(res) {
    return destroyCookie({ res }, 'accesstoken')
}
