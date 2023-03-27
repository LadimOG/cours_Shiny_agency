import React, { useContext } from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'
import { TitleContext } from '../utils/context'

const ButtonCustom = styled.button`
  border: none;
  outline: none;
  background-color: ${colors.secondary};
  padding: 5px;
  font-size: 1.5rem;
`

function Button({ msg }) {
    const {setTitle} = useContext(TitleContext)

    function handleChange() {
        setTitle('Bienvenue ladim og')
    }

  return <ButtonCustom onClick={() => handleChange()} bgc='dark'>{msg}</ButtonCustom>
}

export default Button
