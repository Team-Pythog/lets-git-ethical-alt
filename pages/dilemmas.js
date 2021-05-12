import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { Dilemma, fetchWithToken, postWithToken, ethicsUrl } from '../services/api-access'
import Head from 'next/head'
import Navigation from '../components/navigation'
import DilemmaCreator from '../components/dilemma-creator'
import DilemmaList from '../components/dilemma-list'

export default function Dilemmas() {

  const token = typeof window !== 'undefined' ? localStorage.getItem('ethics_token') : null
  console.log(token)
  const { data, error, mutate } = useSWR([ethicsUrl, token], fetchWithToken);

  const [dilemmas, setDilemmas] = useState([]);

  useEffect(() => {
    if (!data) return;
    setDilemmas(data);
  }, [data])

  if (error) return <h2>Something went wrong.</h2>
  if (!data) return <h2>Loading...</h2>

  async function createDilemma(values) {

    const newDilemma = Dilemma.fromValues(values);

    newDilemma.title += '...';

    const updatedDilemmas = [newDilemma, ...dilemmas]

    mutate(updatedDilemmas, false);

    await postWithToken(token, values);

    mutate();

  }

  return (
    <div>
      <Head>
        <title>Let's Git Ethical</title>
      </Head>
      <Navigation />
      <DilemmaCreator token={token} createEvent={createDilemma} />
      <DilemmaList list={dilemmas} />
    </div>
  )
}