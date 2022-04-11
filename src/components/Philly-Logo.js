import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import NextLink from 'next/link';
// @mui;
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const PhillyLogo = forwardRef(({ disabledLink = false, sx }, ref) => {

  const logo = (
    <Box ref={ref} sx={{ width: 30, height: 40, cursor: 'pointer', ...sx }}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        width='100%'
        height='100%'
        viewBox='0 0 110 140'
      >
        <g transform='translate(-60.000000,140.000000) scale(0.100000,-0.100000)'
           fill='#000000' stroke='none'>
          <path
            d='M1013 1379 c-18 -19 -63 -38 -203 -87 -47 -16 -69 -36 -70 -62 0 -8 -23 -85 -51 -170 -43 -131 -52 -169 -55 -249 -2 -52 -9 -109 -15 -126 -9 -24 -8 -57 5 -146 10 -63 19 -136 20 -164 4 -75 15 -124 41 -185 12 -30 25 -64 29 -75 6 -18 9 -17 31 10 l24 30 -14 -60 c-8 -33 -14 -66 -15 -74 0 -22 118 99 165 169 51 77 110 206 127 281 18 73 17 552 0 729 -10 101 -11 142 -3 164 15 37 10 41 -16 15z m-173 -704 c0 -60 -26 -254 -35 -263 -2 -3 -2 25 2 62 5 53 3 70 -10 84 -15 17 -15 19 3 35 17 14 20 30 20 94 0 54 3 73 10 63 5 -8 10 -42 10 -75z' />
          <path fill='#FF4842'
                d='M1315 1360 c4 -31 -2 -85 -20 -170 -103 -493 -108 -584 -48 -800 40 -141 95 -217 215 -298 114 -76 128 -78 128 -17 0 24 12 75 26 112 14 37 30 91 36 118 5 28 16 80 25 118 18 83 19 135 5 257 -6 52 -18 169 -27 260 -14 152 -19 171 -52 241 -32 69 -40 78 -73 88 -21 6 -44 11 -52 11 -29 0 -127 62 -148 93 l-21 32 6 -45z m188 -680 c9 -103 14 -289 7 -285 -3 2 -19 42 -35 89 l-29 85 17 65 c9 35 17 79 17 97 0 57 17 18 23 -51z' />
          <path
            d='M1110 1295 c-9 -11 -9 -22 -2 -44 7 -18 7 -43 1 -68 -12 -51 -29 -480 -29 -736 0 -180 2 -213 17 -238 22 -37 34 -37 62 2 l23 31 -7 352 c-4 193 -10 414 -14 491 -6 123 -5 143 10 165 14 21 15 28 4 43 -15 21 -48 22 -65 2z' />
        </g>
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <NextLink href='/'>{logo}</NextLink>;
});

PhillyLogo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default PhillyLogo;
