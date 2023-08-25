import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 23.777176,
  lng: 90.399452,
};

function CommunicationMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBjksqy6aZ_3MZjHgAcO7IpcTkCO-YHc-A",
  });

  const [, setMap] = React.useState(null);

  const onLoad = React.useCallback(
    function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);

      setMap(map);
    },
    [setMap]
  );

  const onUnmount = React.useCallback(
    function callback() {
      setMap(null);
    },
    [setMap]
  );

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={{ lat: 23.777176, lng: 90.399452 }} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(CommunicationMap);
