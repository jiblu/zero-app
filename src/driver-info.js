import React, { PureComponent } from 'react'
import Info from './Components/Info'

export default class DriverInfo extends PureComponent {
  render () {
    const { info } = this.props
    const displayName = `${info.driver}`

    return (
      <div>
        <div>
          {displayName}
        </div>
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
