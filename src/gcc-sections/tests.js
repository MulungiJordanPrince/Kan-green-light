import React from 'react';
import { Box } from '@mui/material';
import { Image } from '../components';

function Tests(props) {
  return (
    <div>
      <Box
        sx={{
          height: 500,
          width: 500,
          clipPath: 'polygon(10% 0%, 100% 0px, 100% 100%, 0% 100%)',
          shapeOutside: 'polygon(10% 0%, 100% 0px, 100% 100%, 0% 100%)',
        }}
      >
        <Image src='https://zone-assets-api.vercel.app/assets/images/travel/travel_8.jpg' alt={'hey'} ratio="1/1" />
      </Box>
    </div>
  );
}

export default Tests;