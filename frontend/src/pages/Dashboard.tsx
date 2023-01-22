import React, { useEffect, useState } from 'react'
import '../styles/sass/components/_card.scss'
import useFetch from '../hooks/useFetch'

function Dashboard() {
  const { data, loading } = useFetch('log')
  const [isLoading, setIsLoading] = useState(false)
  const [totalLog, setTotalLog] = useState(0)
  const [latestDate, setLatestDate] = useState<Date>()

  useEffect(() => {
    if (!loading) {
      setTotalLog(data?.total_logs! as any)
      setLatestDate(data?.latest_date! as any)
    }
  }, [loading])

  useEffect(() => {}, [isLoading, totalLog, latestDate])

  const onIncrement = async () => {
    if (isLoading) return

    setIsLoading(true)
    const res = await fetch('/api/log', { method: 'POST' })
      .then((response) => response.json())
      // .then((response) => setLog(response))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false))

    if (!isLoading) {
      setTotalLog(res.total_logs)
      setLatestDate(res.latest_date)
    }
  }

  return (
    <div className='container'>
      <div className='caption'>
        <h1>React x Laravel</h1>
        <p>ClickMe Application</p>
      </div>
      <section className='card'>
        <button
          disabled={isLoading ? true : false}
          className='title'
          onClick={onIncrement}>
          Click Me!
        </button>
        <p className='detail'>{loading || isLoading ? '...' : totalLog}</p>
        <p className='footer'>
          {loading || isLoading
            ? 'updating...'
            : new Date(latestDate! as Date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
              })}
        </p>
      </section>
    </div>
  )
}

export default Dashboard
