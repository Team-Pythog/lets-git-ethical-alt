import { useState } from 'react'
import { getToken, profileFetch } from '../services/api-access'
import LoginForm from '../components/login-form'
import Homepage from './homepage'


export default function Home() {

  const [token, setToken] = useState();

  const [username, setUsername] = useState('');

  async function loginHandler(values) {

    const fetchedToken = await getToken(values);

    if (typeof window !== 'undefined') { localStorage.setItem('ethics_token', fetchedToken) }

    const profileInfo = await profileFetch(values.username, fetchedToken)
      .then((profileInfo) => {
        let profileHeader = profileInfo.header
        let profileImage = profileInfo.image
        let profileBio = profileInfo.bio
        console.log('Profile info before localstorage:', profileInfo)
        console.log('THRESHOLD 0')
        // if (typeof window !== 'undefined') { localStorage.setItem('profile_info', profileInfo) }
        if (typeof window !== 'undefined') { localStorage.setItem('profile_header', profileHeader) }
        if (typeof window !== 'undefined') { localStorage.setItem('profile_image', profileImage) }
        if (typeof window !== 'undefined') { localStorage.setItem('profile_bio', profileBio) }
        console.log('THRESHOLD 1')
        setToken(fetchedToken);
        console.log('THRESHOLD 2')
        setUsername(values.username);
        console.log('THRESHOLD 3')
      });
    // console.log('Profile info before localstorage:', profileInfo)
    // if (typeof window !== 'undefined') { localStorage.setItem('profile_info', profileInfo) }

    // setToken(fetchedToken);

    // setUsername(values.username);
  }

  function logoutHandler() {
    setToken(null);
  }

  if (!token) return <LoginForm onSubmit={loginHandler} />

  return <Homepage token={token} onLogout={logoutHandler} username={username} />
}

