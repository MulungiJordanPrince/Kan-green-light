import PropTypes from 'prop-types';
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
// @mui
import { Box } from '@mui/material';
// config
import { GOOGLE_API } from '../../config';
//
import Popup from './Popup';
import Marker from './Marker';
import MapStyle from './MapStyle';

// ----------------------------------------------------------------------

ContactMap.propTypes = {
  offices: PropTypes.array.isRequired,
  sx: PropTypes.object,
};

export default function ContactMap({ sx, ...other }) {

    const offices = [
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
            "country": "Uganda",
            "address": " Located 200M from Bunamwaya-Ngobe Road, P.O.Box 259 Nateete-Kampala-Uganda",
            "phoneNumber": "(+256)772483248",
            "email": "gloriouswebsite@gmail.com",
            "photo": "https://zone-assets-api.vercel.app/assets/images/travel/travel_5.jpg",
            "latlng": [
                0.26379013880586466,
                32.54636041349096
            ]
        },
    ]

    console.log('Offices: ', offices)

  const [tooltip, setTooltip] = useState(null);

  const [centerMap, setCenterMap] = useState({
    lat: offices[0].latlng[0],
    lng: offices[0].latlng[1],
  });

  const handleOpen = (lat, lng, office) => {
    setCenterMap({
      ...centerMap,
      lat: lat - 32,
      lng,
    });
    setTooltip(office);
  };

  return (
    <Box sx={{ height: 480, overflow: 'hidden', ...sx }} {...other}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAfp5ZK1FeI94gQZE8ZC0nDrKqX8AS0E3U' }}
        center={centerMap}
        zoom={12}
        options={{
          styles: MapStyle,
          disableDefaultUI: true,
        }}
      >
        {offices.map((office, index) => (
          <Marker
            key={index}
            lat={office.latlng[0]}
            lng={office.latlng[1]}
            onOpen={() => handleOpen(office.latlng[0], office.latlng[1], office)}
          />
        ))}

        {tooltip && (
          <Popup
            lat={tooltip.latlng[0]}
            lng={tooltip.latlng[1]}
            office={tooltip}
            onClose={() => setTooltip(null)}
          />
        )}
      </GoogleMapReact>
    </Box>
  );
}
