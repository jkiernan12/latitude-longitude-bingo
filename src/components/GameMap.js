import React, { useEffect } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';
import { useLeafletContext } from '@react-leaflet/core'
import L from 'leaflet'
import 'leaflet-graticule'
import '../css/GameMap.css'

function GameMap() {
function Graticule() {
  const context = useLeafletContext()
  L.latlngGraticule({
    showLabel: true,
    zoomInterval: [
        {start: 2, end: 3, interval: 30},
        {start: 4, end: 4, interval: 10},
        {start: 5, end: 7, interval: 5},
        {start: 8, end: 10, interval: 1}
    ]
  }).addTo(context.map)
  return null
}

  return (
    <MapContainer className="map-container" center={[0, 0]} zoom={1.5} scrollWheelZoom={false}>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  <Graticule />
  </MapContainer>
  )
}

export default GameMap