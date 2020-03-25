import React, {Component} from 'react'
import ReactMapGL from 'react-map-gl'
import {SVGOverlay, HTMLOverlay, CanvasOverlay} from 'react-map-gl'
import Pins from './Pins'

import DRIVERS from './drivers.json'

const MAPBOX_TOKEN = process.env.REACT_APP_MAP_GL_TOKEN

class Map extends Component {

  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  }

  render() {
    function redraw({project}) {
      const [cx, cy] = project([-122, 37])
      return <circle cx={cx} cy={cy} r={40} fill="blue" />
    }
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Pins data={DRIVERS} />
        <SVGOverlay redraw={redraw} />
      </ReactMapGL>
    )
  }
}

export default Map
