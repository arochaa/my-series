import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Navigate, useParams } from 'react-router-dom'

const EditarGenero = (props) => {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)
  const onChange = evt => { setName(evt.target.value) }

  useEffect(() => {
    axios.get(`/api/genres/${id}`)
      .then(res => {
        setName(res.data.name)
      })
  }, [id])

  console.info(props)

  const save = () => {
    axios
      .put(`/api/genres/${id}`, {
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

export default EditarGenero
