import { useState } from 'react'

export default function DilemmaCreator({ token, createEvent }) {
  const reset = {
    title: '',
    // image: values.image,
    text: '',
    response_0: '',
    response_1: '',
  };
  return (
    <div>
      <h1>Test</h1>
      <p>{token}</p>
    </div>
  )
}