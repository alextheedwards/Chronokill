
export const FetchService = async (endpoint: string) => {

  //TODO: replace the hardcoded server address with one from a .env file
  const res = await fetch(`http://localhost:8080${endpoint}`)
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const contentType = res.headers.get('content-type') ?? ""

  if (contentType.includes('application/json')) {
    return res.json()
  } else if (contentType.includes('text/plain')) {
    return res.text()
  } else if (contentType.includes('image')) {
    return res.blob()
  } else {
    throw new Error('Unsupported content type')
  }
}

export default FetchService