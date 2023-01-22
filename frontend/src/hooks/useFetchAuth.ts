import { useState, useEffect } from "react"
import userStore from "../store/userStore"
import { token } from '../api/auth'
import { useNavigate } from "react-router-dom"

const useFetchAuth = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { user, setUser } = userStore()
  const [isAuth, setisAuth] = useState(user.accessToken ? true : false)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) {
      token().then(token => {
        setUser({ ...user, accessToken: token })
      }).catch(err => {
        setisAuth(false)
        setError(err)
      }).finally(() => setLoading(false))
    }
    else navigate('/login')
  }, [])

  return { loading, isAuth, error }
}

export default useFetchAuth