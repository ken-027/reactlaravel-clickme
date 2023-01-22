import { getStorage } from './../helpers/storage';
import { IFetch } from "../ts-interface"

const fetchAPI = ({
  url = '',
  body = {},
  method = 'GET',
  refresh = false
}: IFetch) => {
  const user = getStorage('user')
  const { accessToken, refreshToken } = user

  return fetch(`/api/${url}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${refresh ? refreshToken : accessToken}`,
      'Origin': '*'
      // 'Accept': '*/*'
    },
    body: method === 'GET' ? null : JSON.stringify(body)
  })
}

export default fetchAPI