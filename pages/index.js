import { useState, useEffect } from 'react'
import { getToken, profileFetch } from '../services/api-access'
import LoginForm from '../components/login-form'
import Homepage from './homepage'


export default function Home() {

  const [token, setToken] = useState();

  const [username, setUsername] = useState('');

  async function loginHandler(values) {

    const fetchedToken = await getToken(values);

    const ethics_token = typeof window !== 'undefined' ? localStorage.setItem('ethics_token', fetchedToken) : null

    setToken(fetchedToken);

    setUsername(values.username);

    const profileInfo = await profileFetch(values.username, fetchedToken)
    console.log(profileInfo)
  }

  function logoutHandler() {
    setToken(null);
  }

  if (!token) return <LoginForm onSubmit={loginHandler} />

  return <Homepage token={token} onLogout={logoutHandler} username={username} />
}

