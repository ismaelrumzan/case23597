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
      arl: "c610a21568c03931baf2d3e09bac75dc40a7bdd8adade7f881a25c0c15ec714acf4dae21d53387d6b5ec0b72e85cc15af63f586b065939a13407e0e243208b5a4fc83924d5c633f43fc76a68e255f4bff2e637d3b7ee1a42cdb9c2d3495f7892",
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
