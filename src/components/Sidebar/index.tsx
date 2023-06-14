import { Container } from "./styles"

import { ReactComponent as BurgeIcon } from '../../assets/burger.svg' // ReactComponent importa arquivos SVG

import menuImg from '../../assets/menu.svg' // dessa forma tem de declarar a tag img

export function Siderbar(){
  return <Container>
    <button type='button'>
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
      </ul>
    </nav>
     </Container>
}
