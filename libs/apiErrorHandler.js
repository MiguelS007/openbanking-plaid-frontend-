export default function apiErrorHandler(err, res) {
  console.error(err)
  return res.status(err.status_code).json(err)
}