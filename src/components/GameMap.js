import React, { useEffect } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';
import { useLeafletContext } from '@react-leaflet/core'
import L from 'leaflet'
import 'leaflet-graticule'
import '../css/GameMap.css'

function GameMap({region}) {
  const regionCoordinates = {
    'europe': {center: [51, 22], zoom: 3},
    'asia': {center: [41, 71], zoom: 3},
    'africa': {center: [41, 71], zoom: 3},
    'asia': {center: [41, 71], zoom: 3},
    'australia-oceania': {center: [41, 71], zoom: 3},
    'north-america': {center: [41, 71], zoom: 3},
    'north-america': {center: [41, 71], zoom: 3},
    'world': {center: [41, 71], zoom: 3}
  }

  const currentRegionCoordinates = regionCoordinates[region]
  

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