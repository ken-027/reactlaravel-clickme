import React, { useRef } from 'react'
import Nav from '../components/layouts/Nav'
import userStore from '../store/userStore'
import { useNavigate } from 'react-router-dom'
import { authLogin } from '../api/auth'

const Login = () => {
  const { setUser } = userStore((state) => state)
  const navigate = useNavigate()
  const form = useRef(null)

  const onSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault()
    const formData = form.current
    const { email, password } = formData! as {
      email: HTMLInputElement
      password: HTMLInputElement
    }

    authLogin({
      email: email.value,
      password: password.value,
    }).then((data) => {
      if (data?.accessToken) {
        setUser(data)
        navigate('/users')
      }
    })
  }

  return (
    <>
      <Nav />
      <main>
        <h1 className='text-3xl font-bold'>Login</h1>
        <form
          onSubmit={onSubmit}
          ref={form}>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
            />
          </div>
          <button type='submit'>Login</button>
        </form>
      </main>
    </>
  )
}

export default Login
