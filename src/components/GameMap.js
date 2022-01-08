import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, MapConsumer } from 'react-leaflet';
import { useLeafletContext } from '@react-leaflet/core'
import L from 'leaflet'
import 'leaflet-graticule'
import '../css/GameMap.css'

function Graticule() {
  const context = useLeafletContext()
  L.latlngGraticule({
    showLabel: true,
    zoomInterval: [
        {start: 2, end: 3, interval: 15},
        {start: 4, end: 4, interval: 10},
        {start: 5, end: 7, interval: 5},
        {start: 8, end: 10, interval: 1}
    ]
  }).addTo(context.map)
  return null
}

function GameMap({region}) {
  const regionCoordinates = {
    'europe': {center: [0, 0], zoom: 3},
    'asia': {center: [39, 90], zoom: 3.5},
    'africa': {center: [-10, 10], zoom: 3},
    'australia-oceania': {center: [0, 0], zoom: 4},
    'north-america': {center: [0, 0], zoom: 3},
    'south-america': {center: [0, 0], zoom: 4},
    'world': {center: [0, 0], zoom: 3}
  }
  
  const [currRegionCoord, setCurrRegionCoord] = useState(regionCoordinates['world']);

  useEffect(() => {
    setCurrRegionCoord(regionCoordinates[region])
    console.log(regionCoordinates['south-america'])
  }, [region])

  return (
    <MapContainer className="map-container" center={currRegionCoord.center} zoom={currRegionCoord.zoom} scrollWheelZoom={false}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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