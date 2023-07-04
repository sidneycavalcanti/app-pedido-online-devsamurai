import styled, { keyframes } from 'styled-components'

import { SkeletonProps } from '.'

const shimmerEffect = keyframes`
  0%{
    background-position: 0%;
  }
  50% {
    background-position: -50%;
  }
  75%{
    background-position: -75%;
  }
  100%{
    background-position: -200%;
  }
`

export const SkeletonElement = styled.div<SkeletonProps>`
  background: linear-gradient(90deg,
    ${({theme}) => theme.colors.gray900} 0%,
    #0a0a0a 40%,
    ${({theme}) => theme.colors.gray900} 100%
  );
  background-size: 200%;
  border-radius: 4px;

  animation: ${shimmerEffect} 1s linear infinite;
`
