import { useState, useEffect } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { getPizzas } from '../../../services/api'

export default function Pizzas() {

  const [pizzas, setPizzas] = useState([])

  useEffect(()=> {
      (async() => {
        const pizzaRequest = await getPizzas()

        setPizzas(pizzaRequest.data)
      })()
  },[])


  return (
    <>
      <Head title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}
