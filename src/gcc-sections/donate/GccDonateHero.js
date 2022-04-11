import React from 'react';
// utils
import cssStyles from '../../utils/cssStyles';
import { BgOverlay, Breadcrumbs, Iconify, Image, TextIconLabel } from '../../components';
import { Box, Button, Container, Link, Stack, Typography } from '@mui/material';
import baggageClaim from '@iconify/icons-carbon/baggage-claim';
import user from '@iconify/icons-carbon/user';
import slots from '@iconify/icons-carbon/calendar-heat-map';
import cloudUpload from '@iconify/icons-carbon/cloud-upload';
import { useResponsive } from '../../hooks';
import { styled } from '@mui/material/styles';
import TextMaxLine from '../../components/TextMaxLine';
import * as PropTypes from 'prop-types';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  marginBottom: 10,
  ...cssStyles(theme).bgImage(),
}));

const RootContainerStyle = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(10),
  marginBottom: 10,
}));

// ----------------------------------------------------------------------

export default function GccDonateHero() {

  const isDesktop = useResponsive('up', 'md');

  const config = {
    public_key: 'FLWPUBK-a6de8482ba41c4576ff916a3c653e258-X',
    tx_ref: Date.now(),
    currency: 'UGX',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'gloriouschurch@gmail.com',
    },
    customizations: {
      title: 'Glorious Church',
      description: 'Support God\'s works',
      logo: 'https://gcc-store.s3.us-east-2.amazonaws.com/Images/logos/logo-sm.png',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <>
      <RootStyle>
        <>
          <Stack
            spacing={5}
            direction={{ xs: 'column', md: 'row' }}
            justifyContent={{ md: 'space-between' }}
            alignItems={{ xs: 'flex-start', md: 'center' }}
          >
            <RootContainerStyle>
              <Stack spacing={{ xs: 3, md: 5 }} sx={{ maxWidth: 500, color: 'common.white' }}>
                <Breadcrumbs
                  onDark
                  links={[
                    { name: 'Donations' },
                  ]}
                />
                <Typography variant='h3' component='h1' sx={{ mb: 3 }}>
                  Gccm Give Online
                </Typography>

                <Stack spacing={3} direction={{ xs: 'column', md: 'row' }} sx={{ opacity: 0.48 }}>
                  <TextIconLabel
                    icon={<Iconify icon={baggageClaim} sx={{ width: 20, height: 20, mr: 1 }} />}
                    value={
                      <Link color='inherit'>
                        Gccm Church
                      </Link>
                    }
                  />
                  <TextIconLabel
                    icon={<Iconify icon={user} sx={{ width: 20, height: 20, mr: 1 }} />}
                    value='Gcc Church'
                  />
                  <TextIconLabel
                    icon={<Iconify icon={slots} sx={{ width: 30, height: 20, mr: 1 }} />}
                    value={`Support God's work`}
                  />
                </Stack>
                <Stack>
                  <Typography variant='caption' component='p'>
                    Your all welcome to come join us!
                  </Typography>
                </Stack>
                <Button
                  onClick={() => {
                    handleFlutterPayment({
                      callback: (response) => {
                        console.log(response);
                        closePaymentModal(); // this will close the modal programmatically
                      },
                      onClose: () => {
                      },
                    });
                  }}
                  fullWidth
                  variant='contained'
                  size='large'
                  startIcon={<Iconify icon={cloudUpload} />}>
                  Give online
                </Button>
              </Stack>
            </RootContainerStyle>

            {isDesktop && <Stack
              spacing={2}
              direction='row'
              alignItems='flex-start'
              sx={{ width: 1, height: 1, maxWidth: 500, minHeight: 300 }}
            >
              <Box
                sx={{ borderRadius: '8px 0px 0px 8px', overflow: 'hidden', position: 'relative', height: 1, width: 1 }}>
                <Image src='https://gcc-store.s3.amazonaws.com/images/a58b3f78-f77c-4919-8d3d-86add3023d8f.jpg'
                       alt={'hey'} ratio='1/1' />

                <Stack
                  spacing={1}
                  sx={{
                    bottom: 0,
                    zIndex: 9,
                    position: 'absolute',
                    color: 'common.white',
                    p: { xs: 3, md: 5 },
                  }}
                >

                  <NextLink passHref as={'/sasd'} href={'/'}>
                    <TextMaxLine
                      asLink
                      sx={{
                        typography: { xs: 'h6', md: 'h4' },
                      }}
                    >
                      Welcome to GCC
                    </TextMaxLine>
                  </NextLink>
                </Stack>

                <BgOverlay />
              </Box>
            </Stack>}

          </Stack>
        </>
      </RootStyle>
    </>
  );
}

function NextLink(props) {
  return null;
}

NextLink.propTypes = {
  href: PropTypes.any,
  passHref: PropTypes.bool,
  as: PropTypes.any,
  children: PropTypes.node,
};
