import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, MapConsumer } from 'react-leaflet';
import { useLeafletContext } from '@react-leaflet/core'
import L from 'leaflet'
import 'leaflet-graticule'
import '../css/GameMap.css'
import propTypes from 'prop-types';

function Graticule() {
  const context = useLeafletContext()
  L.latlngGraticule({
    showLabel: true,
    zoomInterval: [
        {start: 2, end: 3, interval: 15},
        {start: 4, end: 4, interval: 10},
        {start: 5, end: 6, interval: 5},
        {start: 7, end: 8, interval: 1},
        {start: 9, end: 10, interval: .5}
    ],
    color: '#aaaaaa85',
    font: '800 1.5em Poppins',
    fontColor: '#e2931d'
  }).addTo(context.map)
  return null
}

function GameMap({region}) {
  const regionCoordinates = {
    'europe': {center: [58, 10], zoom: 4},
    'asia': {center: [45, 90], zoom: 3},
    'africa': {center: [0, 20], zoom: 3},
    'australia-oceania': {center: [-30, 130], zoom: 3},
    'north-america': {center: [41, -95], zoom: 3},
    'south-america': {center: [-30, -65], zoom: 3},
    'world': {center: [0, 0], zoom: 2}
  }
  
  const [currRegionCoord, setCurrRegionCoord] = useState(regionCoordinates['world']);

  useEffect(() => {
    setCurrRegionCoord(regionCoordinates[region])
    // console.log(regionCoordinates['south-america'])
  }, [region])

  return (
    <MapContainer className="map-container" center={currRegionCoord.center} zoom={currRegionCoord.zoom} scrollWheelZoom={false}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAP_API}`} />
      <Graticule />
      <MapConsumer>
        {(map) => {
          map.setView(currRegionCoord.center, currRegionCoord.zoom)
          return null
        }}
      </MapConsumer>
    </MapContainer>
  )
}

export default GameMap

GameMap.propTypes = {
  region: propTypes.string.isRequired
}