import React, { useContext } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import colors from '../utils/colors'
import { TitleContext } from '../utils/context'

const TitleHome = styled.h1`
  text-align: center;
  color: ${colors.primary};
`

function Home() {
  const {title} = useContext(TitleContext)
  return (
    <>
      <TitleHome>{title}</TitleHome>
      <Button msg="Cliquer"/>
    </>
  )
}

export default Home
