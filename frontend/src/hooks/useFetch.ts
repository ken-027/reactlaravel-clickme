import { useState, useEffect } from 'react'
import { IuseFetch } from '../ts-interface'

const useFetch = <T>(
  fetchAPI: (param: any) => Promise<any>,
  storeState: (data: any) => void,
  param?: T,
): IuseFetch => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {
    fetchAPI(param)
      .then((data: any) => {
        setData(data)
        storeState(data)
      })
      .catch((err: any) => setError(err))
      .finally(() => setLoading(false))
  }, [loading])

  return { loading, data, error }
}

export default useFetch
