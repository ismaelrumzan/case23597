import Head from 'next/head'
import React from 'react'

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('api/data', {
			method: 'POST',
			body: JSON.stringify({
				turl: "https://e-cdns-proxy-a.dzcdn.net/mobile/1/261e5e207714174212fc6dcfb1f355d910717451e447191827f82235e60c672abc3df997fbe8e18fb43c3901ac7aea16705405e69f9a5d823d8e059dc826d6dd2fd0c2384c93e33f267af1cffba07db8"
			}),
			headers: {
				'content-type': 'application/json',
			}
		})
		.then((res) => res.arrayBuffer())
		.then((userData) => {
			console.log("done");
      //do something here 
		})
  }
  return (
    <form onSubmit={handleSubmit}>
     
      <button>Submit</button>
    </form>
  )
}
