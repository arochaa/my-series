import React, { useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

const NovoGenero = () => {
  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)
  const onChange = evt => { setName(evt.target.value) }

  const save = () => {
    axios
      .post('/api/genres', {
        name
      })
      .then(res => setSuccess(true))
  }

  if (success) return <Navigate to='/generos' />

  return (
    <div className='container'>
      <h1>Generos</h1>
      <form>
        <div className='form-group'>
          <label htmlFor='nome'>Nome</label>
          <input type='Text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Entre com nome da Serie' />
        </div>
        <button type='button' onClick={save} className='btn btn-primary'>Salvar</button>
      </form>
    </div>
  )
}

export default NovoGenero
