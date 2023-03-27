import React from 'react'
import { Link, Outlet} from 'react-router-dom'
import styled, { css } from 'styled-components'
import colors from '../utils/colors'


const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.primary};
`
const StyleLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 1.2rem;
  &:focus {

    ${(props) => props.$isFullLink && css`
    color: white; 
    border-radius: 30px; 
    background-color:${colors.primary}`}
  }
`


function Header() {
  
  return (
    <ContainerHeader>
      <h1>Shiny</h1>
      <nav>
          <StyleLink to='/' $isFullLink>Accueil</StyleLink>
          <StyleLink to='/survey/1' $isFullLink  >Survey</StyleLink>
          <StyleLink to='/freelance' $isFullLink >Freelance</StyleLink>
      </nav>
      <Outlet />
    </ContainerHeader>

  )
}

export default Header