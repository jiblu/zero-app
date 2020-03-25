import React, {Component} from 'react'
import ReactMapGL, {Popup, NavigationControl, FullscreenControl, ScaleControl} from 'react-map-gl'

import Pins from './Pins'
import DriverInfo from './driver-info'

import DRIVERS from '../Data/drivers.json'

const MAPBOX_TOKEN = process.env.REACT_APP_MAP_GL_TOKEN

const fullscreenControlStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}

const navStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px'
}

const scaleControlStyle = {
  position: 'absolute',
  bottom: 36,
  left: 0,
  padding: '10px'
}

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.7577,
        longitude: -122.4376,
        width: '100vw',
        height: '100vh',
        zoom: 11,
      },
      popupInfo: null
    }
  }

  _updateViewport = viewport => {
    this.setState({viewport})
  }

  _onClickMarker = driver => {
    this.setState({popupInfo: driver})
  }

  _renderPopup() {
    const {popupInfo} = this.state

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={true}
          onClose={() => this.setState({popupInfo: null})}
        >
          <DriverInfo info={popupInfo} />
        </Popup>
      )
    )
  }
  render() {
    const {viewport} = this.state;
    
    return (
      <ReactMapGL
      {...viewport}
      width='100%'
      height='100%'
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={this._updateViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Pins data={DRIVERS} onClick={this._onClickMarker} />

        {this._renderPopup()}

        <div style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>
        <div style={navStyle}>
          <NavigationControl />
        </div>
        <div style={scaleControlStyle}>
          <ScaleControl />
        </div>

      </ReactMapGL>
    )
  }
}

export default Map
