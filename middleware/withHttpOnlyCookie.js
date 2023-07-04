import { parseCookies } from 'nookies'


const withHttpOnlyCookie = (handler) => {
    return async (req,res) => {
        const cookies = parseCookies({req})

        if (!cookies.accesstoken) return res.status(401).json({
            status_code: 401,
            error_code: "NO_ACCESS_TOKEN"
        })

        res.locals = {
            ...res.locals,
            bearerToken: 'Bearer ' + cookies.accesstoken
        }

        return handler(req, res)
    }
}


export default withHttpOnlyCookie
