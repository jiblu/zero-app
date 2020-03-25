import React, {Component} from 'react'
import ReactMapGL from 'react-map-gl'

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
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
    )
  }
}

export default Map
