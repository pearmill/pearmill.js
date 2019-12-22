import uid from './uid'

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response

    throw error
  }
}

const parseJSON = (response) => {
  return response.json()
}

const request = (method, path, params, data) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const query = {
    ...params,
    _pm_uid: uid()
  }

  if (data) {
    options.body = JSON.stringify(data)
  }

  const basePath = `${PEARMILL_BASE_URL}/${path}`
  const url = basePath + (query ? `?${Object.keys(query).map((key) => `${key}=${query[key]}`).join('&')}` : '')

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
}

export const post = (apiKey, path, params, data) => {
  return request('POST', path, { key: apiKey, ...params }, data)
}
