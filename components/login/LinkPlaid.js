import { useCallback, useContext } from 'react'

import { usePlaidLink } from 'react-plaid-link'

import AuthContext from '../../context/AuthContext'

import apiRequest from '../../libs/requests/apiRequest'


const LinkPlaid = ({ linkToken }) => {
    const authContext = useContext(AuthContext)
    const { checkAuth } = authContext

    const onSuccess = useCallback( async (publicToken, metadata) => {
        try {
            const response = await apiRequest('api/login', { publicToken })
            checkAuth()    
        } catch (err) {
            console.error(err)
        }
    }, [])

    const config = {
        token: linkToken,
        onSuccess
    }

    const { open, ready } = usePlaidLink(config)

    return (
        <button className="button is-link" onClick={() => open()} disabled={!ready}>
            Link account
        </button>
    )
}


export default LinkPlaid