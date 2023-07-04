export default function generateErrorObject ({message, statusCode, name, code, type}) {
  let errorObject = new Error(message ? message : 'Something went wrong')
  errorObject.status_code = statusCode ? statusCode : 500
  errorObject.name = name ? name : 'UnknownError'
  errorObject.code = code ? code : 'ERR_UNKNOWN'
  errorObject.type = type ? type : 'UnknownError'
  return errorObject
}