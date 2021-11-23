import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = (props) => {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get('/api')
      .then(res => setData(res.data))
      .catch(err => { throw (err) })
  }, [])
  return (
    <div>
      <h1>Home</h1>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  )
}

export default Home
