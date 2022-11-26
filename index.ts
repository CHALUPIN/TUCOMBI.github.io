/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// This example creates a 2-pixel-wide red polyline showing the path of
// the first trans-Pacific flight between Oakland, CA, and Brisbane,
// Australia which was made by Charles Kingsford Smith.

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 15,
    
      center: { lat: 20.0930994, lng: -98.7625715 },
      mapTypeId: "terrain",
    }
  );

  const flightPlanCoordinates = [
    { lat: 20.09820, lng: -98.76134 },
    { lat: 20.09681804416199, lng: -98.75968716777658 },
    { lat: 20.096951545710834,  lng: -98.75945247449005 },
    { lat: 20.100163403129585, lng:  -98.762801525963 },
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "GREEN",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(map);
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
