import { darken } from 'polished'//biblioteca para manipular cores

import styled from "styled-components";

export const Container = styled.div`
    display: grid;//tabela tipo excel
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));//templetes das colunas auto ajuste
    gap: 1.75rem;//distancia

    @media (max-width: 500px) {
      grid-template-columns: 1fr;//uma unidade no mobile
    }

    .snack {
    position: relative;
    background: ${({ theme }) => theme.colors.black};
    padding: 1.75rem 1.5rem;
    border-radius: 4px;

    h2 {
      margin-bottom: 0.75rem;
      font-weight: 700;
      align-items: center;
      font-size: 1.5rem;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 11.25rem;
      border-radius: 4px;
      margin-bottom: 0.375rem;
    }

    p {
      font-size: 0.875rem;
    }

    div{
      margin-top: .875rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      strong{
        font-size: 2rem;
        font-weight: 500;//peso da fonte
      }

      button{
        background: ${({ theme }) => theme.colors.red};
        width: 3rem;
        height: 3rem;
        border: none;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        svg{
          stroke: ${({ theme }) => theme.colors.white};
          width: 1.5rem;//largura
          height: 1.5rem;//altura
        }

        //passar o mouse por cima do botão, muda de cor.
        &:hover {
          background: ${darken(0.1, '#AA2424')}
        }

      }
    }
    }

`
