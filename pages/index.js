import { useState, useEffect } from 'react'
import { getToken, profileFetch } from '../services/api-access'
import LoginForm from '../components/login-form'
import Homepage from './homepage'
import useSWR from 'swr'


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

  // async function profileInfoHandler(token, username){
  //   const profileUrl = `http://localhost:8000/account/${username}/profile`
  //   const { data, error, mutate } = useSWR([profileUrl, token], profileFetch);
  
  //   const [profileInfo, setProfileInfo] = useState([]);
  
  //   useEffect(() => {
  //     if (!data) return;
  //     setProfileInfo(data);
  //   }, data)
  
  // }

  function logoutHandler() {
    setToken(null);
  }

  if (!token) return <LoginForm onSubmit={loginHandler} />

  return <Homepage token={token} onLogout={logoutHandler} username={username} />
}

