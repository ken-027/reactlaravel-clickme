import { useState, useEffect } from 'react'

const useFetch = (endpoint: string, method: 'POST' | 'GET' = 'GET') => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`/api/${endpoint}`, { method: method })
      .then((response: any) => response.json())
      .then((result: any) => setData(result))
      .catch((err: any) => setError(err))
      .finally(() => setLoading(false))
  }, [loading])

  return { loading, data, error }
}

export default useFetch
