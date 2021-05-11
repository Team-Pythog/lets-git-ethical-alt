import { useState, useEffect } from 'react'
import Head from 'next/head'
import Navigation from '../components/navigation'
import Profile from '../components/profile'

export default function Homepage({ token, logoutEvent, username }) {
  return (
    <div className="">
      <Head>
        <title>Let's Git Ethical</title>
      </Head>
      <Navigation logoutEvent={logoutEvent} />
      <Profile username={username} />
    </div>
  )
}