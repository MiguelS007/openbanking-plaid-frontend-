import withApiErrorHandler from '../../../middleware/withApiErrorHandler'
import withHttpOnlyCookie from '../../../middleware/withHttpOnlyCookie'

import backendRequest from '../../../libs/requests/backendRequest'


const handler = async (req, res) => {
    const { accountId } = req.query

    await backendRequest(
        req,
        res,
        `https://marvelous-isle-royale-99525-e54d92ff3621.herokuapp.com/open-banking/transactions/?accountId=${accountId}&startDate=2018-11-09&endDate=2021-09-07`
    )
}   


export default withApiErrorHandler(withHttpOnlyCookie(handler))