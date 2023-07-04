import { useRouter } from 'next/router'

import Loader from './loader/Loader'


const ErrorItem = ({ error }) => {
    const router = useRouter()
    const { status_code, code, message } = error

    code === 'NO_ACCESS_TOKEN' && router.reload()
    code === 'INVALID_ACCESS_TOKEN' && router.reload()

    if (code === 'PRODUCT_NOT_READY') return <Loader />

    console.error(`${status_code}: ${message}`)

    return (
        <div>
            {status_code}: {message}
        </div>
    )
}


export default ErrorItem