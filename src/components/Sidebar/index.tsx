import { useState } from "react"

import { Container } from "./styles"

import { ReactComponent as BurgeIcon } from '../../assets/burger.svg' // ReactComponent importa arquivos SVG
import { ReactComponent as PizzaIcon } from "../../assets/pizza.svg" //
import { ReactComponent as SodaPopIcon } from "../../assets/soda.svg"
import { ReactComponent as IceCreamIcon } from "../../assets/ice-cream.svg"


import menuImg from '../../assets/menu.svg' // dessa forma tem de declarar a tag img

export function Siderbar(){
  const [menuOpen, setMenuOpen] = useState(false);


  //vai mandar o valor sempre invertido, se é false passa a ser true
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return <Container isMenuOpen={menuOpen}>
    <button type='button' onClick={handleToggleMenu}>
      <img src={menuImg} alt='abrir e fechar o menu' />
    </button>
    <nav>
      <ul>
        <li>
          <a href="#" className="active">
            <BurgeIcon />
            <span>Hambúrgueres</span>
          </a>
        </li>
        <li>
          <a href="#" className="">
            <PizzaIcon />
            <span>Pizzas</span>
          </a>
        </li>
        <li>
          <a href="#" className="">
            <SodaPopIcon />
            <span>Bebidas</span>
          </a>
        </li>
        <li>
          <a href="#" className="">
            <IceCreamIcon />
            <span>Sorvete</span>
          </a>
        </li>
      </ul>
    </nav>
     </Container>
}
