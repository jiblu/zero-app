import React from 'react'
import styled from 'styled-components'

const InfoStyle = styled.div`
  padding: 1px
`
const LabelStyle = styled.div`
  color: #A9A9A9;
  font-size: 10px
`
const TextStyle = styled.div`
  color: #333333;
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