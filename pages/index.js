import { useState } from 'react'
import { getToken, profileFetch } from '../services/api-access'
import LoginForm from '../components/login-form'
import Homepage from './homepage'


export default function Home() {

  // const currentToken = typeof window !== 'undefined' ? localStorage.getItem('ethics_token') : null

  // const [token, setToken] = useState(currentToken);

  const [token, setToken] = useState();

  const [username, setUsername] = useState('');

  const [profileInfo, setProfileInfo] = useState({ image: '', header: '', bio: '' });

  async function loginHandler(values) {

    const fetchedToken = await getToken(values);

    if (typeof window !== 'undefined') { localStorage.setItem('ethics_token', fetchedToken) }

    const profileInfo = await profileFetch(values.username, fetchedToken)
      .then((profileInfo) => {
        setProfileInfo(profileInfo)

        setToken(fetchedToken);

        setUsername(values.username);
      });
  }

  function logoutHandler() {
    setToken(null);
  }

  if (!token) return <LoginForm onSubmit={loginHandler} />

  return <Homepage token={token} username={username} profileInfo={profileInfo} onLogout={logoutHandler} />
}

