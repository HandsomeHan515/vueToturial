export const request = config => {
  config = Object.assign({}, {
    url: '',
    body: undefined,
    method: 'GET',
    cert: undefined,
    isJson: true,
    isBlob: false,
    hasHeader: true
  }, config)

  let elements = {
    method: config.method,
    body: config.body,
    headers: undefined
  }

  if (config.hasHeader) {
    elements.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  if (config.cert) {
    elements.headers.Authorization = config.cert
  }

  return (
    fetch(config.url, elements)
      .then((response) => {
        // console.log('response: %o', response)
        if (!response.ok) {
          let error = new Error(response.statusText || 'Something bas happen')
          error.response = response
          throw error
        }

        if (config.isBlob) return response.blob()
        if (config.isJson) return response.json()

        return response.text()
      })
  )
}
