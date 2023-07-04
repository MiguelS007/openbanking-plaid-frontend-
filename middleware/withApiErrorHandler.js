import apiErrorHandler from "../libs/apiErrorHandler"


const withApiErrorHandler = (handler) => {
    return async (req,res) => {
        try {
            await handler(req, res)
        } catch (err) {
            if (!err.status_code) err.status_code = 500
            await apiErrorHandler(err, res)
        }


    }
}


export default withApiErrorHandler
