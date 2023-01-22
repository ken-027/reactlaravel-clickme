import React, { useEffect } from 'react'
import Nav from '../components/layouts/Nav'
import { fetchBrands } from '../api/users'
import useFetch from '../hooks/useFetch'
import brandStore from '../store/brandStore'

const Brands = () => {
  const { setBrands, brands } = brandStore((state) => state)
  const { loading, error } = useFetch<object>(fetchBrands, setBrands, {
    search: '',
    isPublish: true,
  })

  useEffect(() => {}, [])

  if (loading) return <>fetching...</>
  if (error) return <>fetch failed!</>

  const onRefresh = (): void => {
    window.location.reload()
  }

  return (
    <div>
      <Nav />
      <main>
        <h1 className='text-2xl font-bold text-center p-5'>List of brands</h1>
        <div>
          {brands.length &&
            brands.map((brand, index: number) => (
              <h2 key={index}>{brand.title}</h2>
            ))}
        </div>
        <button
          className='btn'
          onClick={onRefresh}>
          Refresh
        </button>
      </main>
    </div>
  )
}

export default Brands
