import Head from 'next/head'
import React from 'react'

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('api/data', {
      method: 'POST',
      headers: {
      'content-type': 'application/json',
      },
      body: JSON.stringify({
      arl: "non",
      track: "https://www.deezer.com/en/track/75859862"
      }),
    })
    .then((res) => res.json())
    .then((userData) => {
      console.log(userData);
      // do something with the data
    })
  }
  return (
    <form onSubmit={handleSubmit}>
     
      <button>Submit</button>
    </form>
  )
}
