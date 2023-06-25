import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'

export default function Burgers() {
  const data = [ 
    {
    id: 1,
    snack: 'burger',
    name: 'Mega',
    description: 
    'O artesanal tamanho família recheado com três carnes suculentas, queijo e bacon.',
    price: 25.5,
    image: 'https://i.imgur.com/v2jMKZJ.jpeg',
  },
  {
    id: 2,
    snack: 'burger',
    name: 'Extra bacon Mega',
    description: 
    'O artesanal tamanho família recheado com três carnes suculentas, queijo e bacon.',
    price: 23.5,
    image: 'https://i.imgur.com/v2jMKZJ.jpeg',
  }
]
   
  return (
    <>
    <Head title='Hambúrgueres' />
    <SnackTitle>Hambúrgueres</SnackTitle>
    </>
  )

}
