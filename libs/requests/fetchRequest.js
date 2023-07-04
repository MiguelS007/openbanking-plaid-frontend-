export default async function fetchRequest(address, config) {
  const response = await fetch(address, config)

  const status = response.status
  const data = await response.json()

  return {
      ...data, 
      status_code: status
  }
}
