import withApiErrorHandler from '../../../middleware/withApiErrorHandler'
import withHttpOnlyCookie from '../../../middleware/withHttpOnlyCookie'

import backendRequest from '../../../libs/requests/backendRequest'


const handler = async (req, res) => {
    const { accountId } = req.query
    await backendRequest(
        req,
        res,
        `https://marvelous-isle-royale-99525-e54d92ff3621.herokuapp.com/open-banking/balance?accountId=${accountId}`
    )
}  

export default withApiErrorHandler(withHttpOnlyCookie(handler))