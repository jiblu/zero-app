import React, { PureComponent } from 'react'
import Info from './Info'
import styled from 'styled-components'
import * as Themes from '../Themes/index'

const { large } = Themes.Metrics.fontSize

const DriverStyle = styled.div`
  font-size: ${large};
  padding-bottom: 10px;
  color: ${Themes.Colors.accent}
`

export default class DriverInfo extends PureComponent {
  render () {
    const { info } = this.props
    const displayName = `${info.driver}`

    return (
      <div style={{ cursor: 'pointer' }}>
        <DriverStyle>
          {displayName}
        </DriverStyle>
        {Object.keys(info.status).map((item, i) => {
          return (
            <div key={i}>
              <Info label={item} text={JSON.stringify(info.status[item])} />
            </div>
          )
        })}
      </div>
    )
  }
}
