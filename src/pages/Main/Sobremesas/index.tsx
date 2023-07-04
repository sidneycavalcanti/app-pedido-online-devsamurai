import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { useState, useEffect } from 'react'

import { getSobremesas } from '../../../services/api'

export default function Sobremesas() {

  const [sobremesas, setSobremesas] = useState([])

  useEffect(()=>{
    (async() => {
      const sobremesaRequest = await getSobremesas()

      setSobremesas(sobremesaRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Sobremesas' />
      <SnackTitle>Sobremesas</SnackTitle>
      <Snacks snacks={sobremesas}></Snacks>
    </>
  )
}
