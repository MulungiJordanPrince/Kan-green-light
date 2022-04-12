import React from 'react';
import NextLink from 'next/link'
// utils
import cssStyles from '../../utils/cssStyles';
import { Breadcrumbs, Iconify, Image, TextIconLabel } from '../../components';
import { Box, Button, Card, CardContent, CardHeader, Container, Link, Stack, Typography } from '@mui/material';
import baggageClaim from '@iconify/icons-carbon/baggage-claim';
import user from '@iconify/icons-carbon/user';
import slots from '@iconify/icons-carbon/calendar-heat-map';
import cloudUpload from '@iconify/icons-carbon/cloud-upload';
import { useResponsive } from '../../hooks';
import { styled } from '@mui/material/styles';
import Newsletter from '../Newsletter';
import { CarouselBasic3 } from '../../sections/overview/extra/carousel';
import LandingCarousel from './LandingCarousel';

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

export default function LandingHero() {

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
              <Stack spacing={{ xs: 3, md: 5 }} sx={{ maxWidth: 400, color: 'common.white' }}>
                <Breadcrumbs
                  onDark
                  links={[
                    { name: 'GCCM' },
                  ]}
                />
                <Typography variant='h3' component='h1' sx={{ mb: 3 }}>
                  Glorious Church of Christ
                </Typography>

                <Stack spacing={3} direction={{ xs: 'column', md: 'row' }} sx={{ opacity: 0.48 }}>
                  <TextIconLabel
                    icon={<Iconify icon={baggageClaim} sx={{ width: 20, height: 20, mr: 1 }} />}
                    value={
                      <Link color='inherit'>
                        Ministries
                      </Link>
                    }
                  />
                  <TextIconLabel
                    icon={<Iconify icon={user} sx={{ width: 20, height: 20, mr: 1 }} />}
                    value='Gccm Church'
                  />
                  <TextIconLabel
                    icon={<Iconify icon={slots} sx={{ width: 20, height: 20, mr: 1 }} />}
                    value={`8 Ministries`}
                  />
                </Stack>
                <Stack>
                  <Typography variant='caption' component='p'>
                    Your all welcome to come join us!
                  </Typography>
                </Stack>
                <NextLink href='/donate' passHref>
                <Button fullWidth variant='contained' size='large' startIcon={<Iconify icon={cloudUpload} />}>
                  Donate
                </Button>
                </NextLink>
              </Stack>
            </RootContainerStyle>

            {isDesktop && <Stack
              spacing={2}
              direction='row'
              alignItems='center'
              justifyContent='flex-end'
              sx={{ width: 1, height: 1, maxHeight: 500 }}
            >
              <Box
                sx={{
                  height: 1,
                  maxHeight: 500,
                  maxWidth: 600,
                  width: 1,
                  clipPath: 'polygon(10% 0%, 100% 0px, 100% 100%, 0% 100%)',
                  shapeOutside: 'polygon(10% 0%, 100% 0px, 100% 100%, 0% 100%)',
                }}
              >
                <Card sx={{borderRadius: 0}}>
                    <LandingCarousel />
                </Card>
              </Box>

            </Stack>}
          </Stack>
        </>
      </RootStyle>
    </>
  );
}
