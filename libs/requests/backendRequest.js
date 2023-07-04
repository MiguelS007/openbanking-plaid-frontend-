import fetchRequest from './fetchRequest'
import fetchRequestWithAuth from './fetchRequestWithAuth'
import fetchRequestWithSettingHttpOnlyCookie from './fetchRequestWithSettingHttpOnlyCookie'
import fetchRequestWithDeleteToken from './fetchRequestWithDeleteToken'

import generateErrorObject from '../generateErrorObject'
import nestedObjectCheck from '../nestedObjectCheck'


const backendRequest = async (req, res, address, method='GET') => {
    let response;

    const wrongMethodError = () => generateErrorObject(405, 'Method not allowed')

    if (address === 'https://marvelous-isle-royale-99525-e54d92ff3621.herokuapp.com/open-banking/link-token') {
        if (method === 'GET') {
            response = await fetchRequest(address, {
                method: method
            })
        } else {
            throw wrongMethodError()
        }
    } else if (address === 'https://marvelous-isle-royale-99525-e54d92ff3621.herokuapp.com/open-banking/access-token') {
        if (method === 'GET') {
            if (nestedObjectCheck(req, 'body.publicToken')) {
                response = await fetchRequestWithSettingHttpOnlyCookie(res, address, req.body.publicToken)
            } else {
                throw generateErrorObject(400, 'No public token included')
            }    
        } else if (method === 'DELETE') {
            response = await fetchRequestWithDeleteToken(res, address, method, res.locals.bearerToken)
        } else {
            throw wrongMethodError()
        }
    } else if (
        address === 'https://marvelous-isle-royale-99525-e54d92ff3621.herokuapp.com/open-banking/auth'
        || address === 'https://marvelous-isle-royale-99525-e54d92ff3621.herokuapp.com/open-banking/institution'
        || address === 'https://marvelous-isle-royale-99525-e54d92ff3621.herokuapp.com/open-banking/accounts'
        || address.startsWith('https://marvelous-isle-royale-99525-e54d92ff3621.herokuapp.com/open-banking/balance')
        || address.startsWith('https://marvelous-isle-royale-99525-e54d92ff3621.herokuapp.com/open-banking/transactions')
    ) {
        if (method === 'GET') {
            response = await fetchRequestWithAuth(address, method, res.locals.bearerToken, req?.body?.accountId)
        } else {
            throw wrongMethodError()            
        }
    } else {
        throw generateErrorObject(404, 'No backend endpoint available')
    }

    if (!response.status_code || response.status_code >= 400) throw response

    res.status(response.status_code).json(response)
}


export default backendRequest
