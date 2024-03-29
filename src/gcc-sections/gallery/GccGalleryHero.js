import React from 'react';
import { useTheme } from '@mui/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';

export default function GccGalleryHero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        height: '140px',
        pt: '32px',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          zIndex: 1,
          marginTop: 4,
          top: 0,
          left: 0,
          height: '280px',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${theme.palette.primary.dark} 20%, transparent 20%)`,
          opacity: 0.1,
        },
      }}
    >
      <Box position="relative" zIndex={2}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
          align={'center'}
        >
          KGA Gallery
        </Typography>
        <Box marginBottom={2}>
          <Typography
            variant="h2"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            Our Gallery
          </Typography>
        </Box>
        <Box display="flex" justifyContent={'center'}>
            <NextLink href='/contact-us' passHref>
          <Box
            component={Button}
            variant="contained"
            color="primary"
            size="large"
            endIcon={
              <svg
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            }
          >
            Contact Us Today
          </Box>
            </NextLink>
        </Box>
      </Box>
    </Box>
  );
};
