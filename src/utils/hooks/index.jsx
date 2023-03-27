import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return

    async function fetchData() {

      try {
        const res = await fetch(url)
        const data = await res.json()
        setData(data)
        setLoading(false)

      } catch (error) {
        console.log(error)
        setError(true)

      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { isLoading, data, error }
}
