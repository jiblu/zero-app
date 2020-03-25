import React from 'react'
import styled from 'styled-components'
import * as Themes from '../Themes/index'

const {
  lightGray
} = Themes.Colors

const HeaderStyle = styled.div`
  background-color: ${lightGray}
`

const Header = props => {
  return (
    <HeaderStyle>
      <a href='/'>
        <img src='https://storage.googleapis.com/zeroshop-cdn/site/img/logo3.png' />
      </a>
    </HeaderStyle>
  )
}

export default Header
