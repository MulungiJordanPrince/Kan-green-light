import React from 'react';
import NextLink from 'next/link'
// utils
import cssStyles from '../../utils/cssStyles';
import { Breadcrumbs, Iconify, Image, TextIconLabel } from '../../components';
import { Box, Button, Container, Link, Stack, Typography } from '@mui/material';
import baggageClaim from '@iconify/icons-carbon/baggage-claim';
import user from '@iconify/icons-carbon/user';
import slots from '@iconify/icons-carbon/calendar-heat-map';
import cloudUpload from '@iconify/icons-carbon/cloud-upload';
import { useResponsive } from '../../hooks';
import { styled } from '@mui/material/styles';
import Newsletter from '../Newsletter';

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

function GccMinistry({ ministry }) {

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
                    { name: 'Services' },
                  ]}
                />
                <Typography variant='h3' component='h1' sx={{ mb: 3 }}>
                  {Services?.title}
                </Typography>

                <Stack spacing={3} direction={{ xs: 'column', md: 'row' }} sx={{ opacity: 0.48 }}>
                  <TextIconLabel
                    icon={<Iconify icon={baggageClaim} sx={{ width: 20, height: 20, mr: 1 }} />}
                    value={
                      <Link color='inherit'>
                        Services
                      </Link>
                    }
                  />
                  <TextIconLabel
                    icon={<Iconify icon={user} sx={{ width: 20, height: 20, mr: 1 }} />}
                    value='Kan GreenLight'
                  />
                  <TextIconLabel
                    icon={<Iconify icon={slots} sx={{ width: 20, height: 20, mr: 1 }} />}
                    value={'9 services'}
                  />
                </Stack>
                <Stack>
                  <Typography variant='caption' component='p'>
                    Turning your Dream into Digital Reality!
                  </Typography>
                </Stack>
                <NextLink href='/contact-us' passHref>
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
              sx={{ width: 1, height: 1, maxHeight: 500 }}
            >
              <Box
                sx={{
                  height: 1,
                  maxHeight: 500,
                  width: 1,
                  clipPath: 'polygon(10% 0%, 100% 0px, 100% 100%, 0% 100%)',
                  shapeOutside: 'polygon(10% 0%, 100% 0px, 100% 100%, 0% 100%)',
                }}
              >
                <Image
                  src={ministry?.image}
                  alt={'hey'}
                  ratio='1/1' />
              </Box>

            </Stack>}
          </Stack>
        </>
      </RootStyle>
      <Stack sx={{py: 6, px: {xs: 2, md: 6, lg: 8}}} spacing={4}>
        {
          ministry.content.div.map((div, index) => (
              <Box key={index}>
                <Typography variant='h4'>{div.title}</Typography>
                <ul>
                  {
                    div.points.map((point, index) => (
                        <li key={index}>
                          <Typography variant='body1' sx={{fontSize: "0.875em"}}>{point}</Typography>
                        </li>
                    ))
                  }
                </ul>
              </Box>
          ))
        }
      </Stack>
      <Newsletter />
    </>
  );
}

export default GccMinistry;