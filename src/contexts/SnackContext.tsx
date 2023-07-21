import { createContext, useState, useEffect, ReactNode } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { getBurgers, getPizzas, getBebidas,  getSobremesas } from '../services/api'


interface SnackContexProps {
  burgers: SnackData[]
  pizzas: SnackData[]
  bebidas: SnackData[]
  sobremesas: SnackData[]

}

interface SnackProviderProps {
  children: ReactNode;
}

export const SnackContext = createContext({} as SnackContexProps)


export function SnackProvider({ children }: SnackProviderProps ) {


const [burgers, setBurgers] = useState<SnackData[]>([])
const [pizzas, setPizzas] = useState<SnackData[]>([])
const [bebidas, setBebidas] = useState<SnackData[]>([])
const [sobremesas, setSobremesas] = useState<SnackData[]>([])

useEffect(() => {
  ;(async() => {

     const burgerRequest = await getBurgers()
     const pizzasRequest = await getPizzas()
     const bebidasRequest = await getBebidas()
     const sobremesasRequest = await getSobremesas()

     const requests = [burgerRequest, pizzasRequest, bebidasRequest, sobremesasRequest]

     const [
      { data: burgerResponse },
      { data: pizzasResponse },
      { data: bebidasResponse },
      { data: sobremesasResponse },
     ] = await Promise.all(requests)

     setBurgers(burgerResponse)
     setPizzas(pizzasResponse)
     setBebidas(bebidasResponse)
     setSobremesas(sobremesasResponse)

 })()
}, [])

return (
  <SnackContext.Provider value={{ burgers, pizzas, bebidas, sobremesas }}>
  { children }
  </SnackContext.Provider>
)
}
