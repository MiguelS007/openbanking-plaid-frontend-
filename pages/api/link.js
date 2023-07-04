import withApiErrorHandler from '../../middleware/withApiErrorHandler'
import backendRequest from '../../libs/requests/backendRequest'


const handler = async (req, res) => {
    await backendRequest(
        req, 
        res, 
        'https://marvelous-isle-royale-99525-e54d92ff3621.herokuapp.com/open-banking/link-token'
    )
}


export default withApiErrorHandler(handler)