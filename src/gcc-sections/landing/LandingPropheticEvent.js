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
            'url("https://www.google.com/search?q=worship+photos&rlz=1C1SQJL_enUG1004UG1004&sxsrf=ALiCzsasr62irrmL4mKA2rH-P2dVQ7i5eA:1653390029160&tbm=isch&source=iu&ictx=1&vet=1&fir=uIUrzMYiQjcWXM%252Cgf0ibnPsxN8VoM%252C_%253BkE4C4FwThPtLRM%252CmZkJsIMT72j9UM%252C_%253BwkPP5LMD9W5KyM%252CoF0Bb6TPmPGcDM%252C_%253BMoqFtI9Mggy7fM%252CT1XdnaR8bzNYhM%252C_%253BkNyTLkcQT1YKtM%252C__OliPALLoOF8M%252C_%253BGwpFCkn6MkQkvM%252CoF0Bb6TPmPGcDM%252C_%253BGy9v7iAS1-CCMM%252Ce4aFrk-O-atJDM%252C_%253BU7vb9gms-MJ4IM%252CYgjiuTBv_jlP5M%252C_%253B8S592wp8N9mwUM%252CeXDvv2d9Lkre-M%252C_%253Bt_Fdy6zBoRXm7M%252CjDcJxCjrEEy8VM%252C_%253B9LJYNZbBGV4iGM%252Cgf0ibnPsxN8VoM%252C_%253BW64RISDocS0aSM%252CSnkvX0Zvmky4BM%252C_&usg=AI4_-kTUkIFS9r73H-WsVUgIr7BDJLYADQ&sa=X&sqi=2&ved=2ahUKEwj70fPq_ff3AhWYF7kGHR9GDfEQ9QF6BAgGEAE#imgrc=kNyTLkcQT1YKtM")',
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