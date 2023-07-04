import withApiErrorHandler from '../../middleware/withApiErrorHandler'
import withHttpOnlyCookie from '../../middleware/withHttpOnlyCookie'

import backendRequest from '../../libs/requests/backendRequest'


const handler = async (req, res) => {
    await backendRequest(
        req,
        res,
        'https://marvelous-isle-royale-99525-e54d92ff3621.herokuapp.com/open-banking/auth'
    )
}


export default withApiErrorHandler(withHttpOnlyCookie(handler))
