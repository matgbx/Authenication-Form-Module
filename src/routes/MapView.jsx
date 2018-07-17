import React from 'react';
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker
} = require('react-google-maps');
// import GoogleMapReact from 'google-map-react';


// const MapView = (props) => {
//   return (
//     <div className="google-map">
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: 'AIzaSyCp2Tgf8U3lVzEOAAFBp4q6X2zvpjg5wZY' }}
//         center={[37.773972, -122.431297]}
//         defaultZoom={15}
//       />
//     </div>
//   );
// };
const MapView = withScriptjs(withGoogleMap((props) => {
    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: 37.773972, lng: -122.431297 }}
        >
            {props.isMarkerShown && <Marker position={{ lat: 37.773972, lng: -122.431297 }} />}
        </GoogleMap>
    )
}));

export default MapView;
