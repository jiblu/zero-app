import React from 'react'
import styled from 'styled-components'
import * as Themes from '../Themes/index'

const {
  lightGray,
  darkGray
} = Themes.Colors

const {
  smaller,
  small
} = Themes.Metrics.fontSize

const InfoStyle = styled.div`
  padding: 1px
`
const LabelStyle = styled.div`
  color: ${lightGray};
  font-size: ${smaller}
`
const TextStyle = styled.div`
  color: ${darkGray};
  font-size: ${small}
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
