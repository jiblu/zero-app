import React, { PureComponent } from 'react'
import { Marker } from 'react-map-gl'
import * as Themes from '../Themes/index'

const { accent } = Themes.Colors

const ICON = 'M 20 8 h -3 V 4 H 3 c -1.1 0 -2 0.9 -2 2 v 11 h 2 c 0 1.66 1.34 3 3 3 s 3 -1.34 3 -3 h 6 c 0 1.66 1.34 3 3 3 s 3 -1.34 3 -3 h 2 v -5 l -3 -4 Z M 6 18.5 c -0.83 0 -1.5 -0.67 -1.5 -1.5 s 0.67 -1.5 1.5 -1.5 s 1.5 0.67 1.5 1.5 s -0.67 1.5 -1.5 1.5 Z m 13.5 -9 l 1.96 2.5 H 17 V 9.5 h 2.5 Z m -1.5 9 c -0.83 0 -1.5 -0.67 -1.5 -1.5 s 0.67 -1.5 1.5 -1.5 s 1.5 0.67 1.5 1.5 s -0.67 1.5 -1.5 1.5 Z'

const SIZE = 20

export default class Pins extends PureComponent {
  render () {
    const { data, onClick } = this.props

    return data.map((city, index) => (
      <Marker key={`marker-${index}`} longitude={city.longitude} latitude={city.latitude}>
        <svg
          height={SIZE}
          viewBox='0 0 24 24'
          style={{
            cursor: 'pointer',
            fill: accent,
            stroke: 'none',
            transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
          }}
          onClick={() => onClick(city)}
        >
          <path d={ICON} />
        </svg>
      </Marker>
    ))
  }
}
