import { useState, useEffect } from 'react'
import Head from 'next/head'
import Navigation from '../components/navigation'
import Profile from '../components/profile'
import DilemmaCreator from '../components/dilemma-creator'
import { profileFetch, dilemmaPost } from '../services/api-access'

export default function Homepage({ token, logoutEvent, username }) {

  // const profileInfo = profileFetch(username, token)
  async function profileDataGenerator(username, token) {
    console.log('THRESHOLD 0')

    const profileInfo = await profileFetch(username, token)

    return profileInfo
  }

  async function createDilemma(token, values) {

    await dilemmaPost(token, values);

  }
  return (
    <div className="">
      <Head>
        <title>Let's Git Ethical</title>
      </Head>
      <Navigation logoutEvent={logoutEvent} />
      <Profile username={username} token={token} profileDataGenerator={profileDataGenerator} />
      <DilemmaCreator token={token} createEvent={createDilemma} />
    </div>
  )
}