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
      Imported Header Here
    </HeaderStyle>
  )
}

export default Header
