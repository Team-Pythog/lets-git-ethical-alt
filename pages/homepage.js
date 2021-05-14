import Head from 'next/head'
import Navigation from '../components/navigation'
import Profile from '../components/profile'
import DilemmaCreator from '../components/dilemma-creator'
import { dilemmaPost } from '../services/api-access'

export default function Homepage({ token, username, profileInfo, logoutEvent }) {

  async function createDilemma(token, values) {

    await dilemmaPost(token, values);
  }

  return (
    <div className="">
      <Head>
        <title>Let's Git Ethical</title>
      </Head>
      <Navigation logoutEvent={logoutEvent} />
      <Profile username={username} profileInfo={profileInfo} />
      <DilemmaCreator token={token} createEvent={createDilemma} />
    </div>
  )
}