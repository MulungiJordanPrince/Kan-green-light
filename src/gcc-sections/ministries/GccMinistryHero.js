import React from 'react';
import NextLink from 'next/link'
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

export default function GccMinistryHero() {

  const isDesktop = useResponsive('up', 'md');

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
              <Stack spacing={{ xs: 3, md: 5 }} sx={{ maxWidth: 400, color: 'common.white', px: {xs: 2, md: 6} }}>
                <Breadcrumbs
                  onDark
                  links={[
                    { name: 'services' },
                  ]}
                />
                <Typography variant='h3' component='h1' sx={{ mb: 3 }}>
                 KGA SERVICES
                </Typography>

                <Stack spacing={3} direction={{ xs: 'column', md: 'row' }} sx={{ opacity: 0.48 }}>
                  <TextIconLabel
                    icon={<Iconify icon={baggageClaim} sx={{ width: 20, height: 20, mr: 1 }} />}
                    value={
                      <Link color='inherit'>
                       SERVICES
                      </Link>
                    }
                  />
                  <TextIconLabel
                    icon={<Iconify icon={user} sx={{ width: 20, height: 20, mr: 1 }} />}
                    value='KGA '
                  />
                  <TextIconLabel
                    icon={<Iconify icon={slots} sx={{ width: 20, height: 20, mr: 1 }} />}
                    value={`8 Services`}
                  />
                </Stack>
                <Stack>
                  <Typography variant='caption' component='p'>
                    We offer a variety of services to our customers.
                  </Typography>
                </Stack>
                <NextLink href='/contact Us' passHref>
                <Button fullWidth variant='contained' size='large' startIcon={<Iconify icon={cloudUpload} />}>
                  Contact Us
                </Button>
                </NextLink>
              </Stack>
            </RootContainerStyle>

            {isDesktop && <Stack
              spacing={2}
              direction='row'
              alignItems='flex-start'
              sx={{ width: 1, height: 1, maxWidth: 500, minHeight: 300 }}
            >
              <Box sx={{ borderRadius: '0px 0px 0px 0px', overflow: 'hidden', position: 'relative', height: 1, width: 1 }}>
                <Image src='https://static.semrush.com/blog/uploads/media/80/8e/808eca714e4511a37637f774b71cda95/Content%20Strategy%20Blog-03%20%281%29.png' alt={'hey'} ratio="1/1" />

                <Stack
                  spacing={1}
                  sx={{
                    bottom: 0,
                    zIndex: 9,
                    position: 'absolute',
                    color: 'common.white',
                    px: 2,
                    py: 2,
                  }}
                >
                    <TextMaxLine
                      sx={{
                        typography: { xs: 'h6', md: 'h4' },
                      }}
                    >
                      Welcome to our Services
                    </TextMaxLine>
                </Stack>

                <BgOverlay startColor={'rgba(107,255,48,0.08)'} endColor={'#28411efa'} />
              </Box>
            </Stack>}

          </Stack>
        </>
      </RootStyle>
    </>
  );
}

