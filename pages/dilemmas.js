import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { dilemmaFetch, ethicsUrl } from '../services/api-access'
import Head from 'next/head'
import Navigation from '../components/navigation'
import DilemmaList from '../components/dilemma-list'

export default function Dilemmas() {

  const token = typeof window !== 'undefined' ? localStorage.getItem('ethics_token') : null

  const { data, error, mutate } = useSWR([ethicsUrl, token], dilemmaFetch);

  const [dilemmas, setDilemmas] = useState([]);

  useEffect(() => {
    if (!data) return;
    setDilemmas(data);
  }, [data])
  console.log(data)

  if (error) return <h2>Something went wrong.</h2>
  if (!data) return <h2>Loading...</h2>

  return (
    <body className="w-full h-screen bg-red-400 ">
      <div>
        <Head>
          <title>Let's Git Ethical</title>
        </Head>
        <Navigation />
        <DilemmaList dilemmas={dilemmas} />
      </div>
    </body>
  )
}