import React from 'react'
import styled from 'styled-components'
import * as Themes from '../Themes/index'

const {
  lightGray,
  darkGray
} = Themes.Colors

const InfoStyle = styled.div`
  padding: 1px
`
const LabelStyle = styled.div`
  color: ${lightGray};
  font-size: 10px
`
const TextStyle = styled.div`
  color: ${darkGray};
  font-size: 12px
`
const Info = props => {
  return (
    <InfoStyle>
      <TextStyle>
        {props.text}
      </TextStyle>
      <LabelStyle>
        {props.label}
      </LabelStyle>
    </InfoStyle>
  )
}

export default Info
