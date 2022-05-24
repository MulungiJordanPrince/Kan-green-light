import React from 'react';
import { useTheme } from '@mui/styles';
import { Box, Container } from '@mui/material';
import Hero from '../events/Hero';

function LandingHero(props) {
  const theme = useTheme();
  return (
      <Box
        minHeight={{ xs: 'auto', md: 'calc(100vh - 64px)' }}
        height={'auto'}
        position={'relative'}
        sx={{
          backgroundImage:
            'url("https://media.istockphoto.com/photos/christians-raising-their-hands-in-praise-and-worship-at-a-night-music-picture-id1006629472?k=20&m=1006629472&s=612x612&w=0&h=OZMSVm7G1-RF7WxLNuDyuLX8bY6tHOSgKaIEKrVDUi8=")',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundAttachment: 'fixed',
          '&:after': {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: '100%',
            width: '100%',
            content: '" "',
            zIndex: 1,
            backgroundColor: theme.palette.primary.dark,
            backgroundAttachment: 'fixed',
            opacity: 0.7,
          },
        }}
      >
        <Box
          position={{ xs: 'relative', md: 'absolute' }}
          top={{ xs: 0, md: '50%' }}
          width={'100%'}
          height={'auto'}
          sx={{
            transform: { md: 'translateY(-50%)' },
          }}
          zIndex={2}
        >
          <Container>
            <Hero />
          </Container>
        </Box>
      </Box>
  );
}

export default LandingHero;