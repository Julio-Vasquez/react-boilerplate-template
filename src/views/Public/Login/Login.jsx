import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import MetaDescription from '../../../components/MetaDescription'

import i18n from '../../../i18n'
import { login } from '../../../services/auth/authSlice'

const Login = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  const dispatch = useDispatch()

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
    console.log(`${[e.target.name]} : ${e.target.value}`)
  }

  const onSubmit = e => {
    e.preventDefault()
    dispatch(login(form))
  }

  return (
    <div>
      <MetaDescription
        title={i18n.t('login')}
        description="Login Page"
        keywords={['login', 'auth']}
      />
      <h3>{i18n.t('login')}</h3>
      <form onChange={onChange} onSubmit={onSubmit}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <input type="submit" value={i18n.t('login')} />
      </form>
    </div>
  )
}

export default Login
