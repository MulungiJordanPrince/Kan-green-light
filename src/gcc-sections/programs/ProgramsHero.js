// icons
import user from '@iconify/icons-carbon/user';
import baggageClaim from '@iconify/icons-carbon/baggage-claim';
import slots from '@iconify/icons-carbon/calendar-heat-map';
// @mui
import { styled } from '@mui/material/styles';
import {
  Typography,
  Stack,
  Link,
  Button,
  Container, Box, useTheme,
} from '@mui/material';
// utils
import NextLink from 'next/link'
import cssStyles from '../../utils/cssStyles';
// components
import { Breadcrumbs, TextIconLabel, Iconify, Image, BgOverlay } from '../../components';
import { useResponsive } from '../../hooks';
import cloudUpload from '@iconify/icons-carbon/cloud-upload';
import React from 'react';
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

export default function ProgramsHero() {

  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  return (
    <Box sx={{ ...cssStyles(theme).bgImage() }}>
      <RootStyle>

        <Stack
          spacing={5}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
        >
          <RootContainerStyle>
            <Stack spacing={{ xs: 3, md: 2 }} sx={{ maxWidth: 400, color: 'common.white' }}>
              <Breadcrumbs
                onDark
                links={[
                  { name: 'Calendar' },
                ]}
              />
              <Typography variant='h3' component='h1' sx={{ mb: 3 }}>
                GCC Programs
              </Typography>

              <Stack spacing={3} direction={{ xs: 'column', md: 'row' }} sx={{ opacity: 0.48 }}>
                <TextIconLabel
                  icon={<Iconify icon={baggageClaim} sx={{ width: 20, height: 20, mr: 1 }} />}
                  value={
                    <Link color='inherit' underline='always'>
                      GCC Programs
                    </Link>
                  }
                />
                <TextIconLabel
                  icon={<Iconify icon={user} sx={{ width: 20, height: 20, mr: 1 }} />}
                  value='Worship'
                />
                <TextIconLabel
                  icon={<Iconify icon={slots} sx={{ width: 20, height: 20, mr: 1 }} />}
                  value={`12 Services`}
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
            alignItems='flex-start'
            sx={{ width: 1, height: 1, maxWidth: 500, minHeight: 300 }}
          >
            <Box sx={{ borderRadius: '8px 0px 0px 8px', overflow: 'hidden', position: 'relative', height: 1, width: 1 }}>
              <Image src='https://www.pngkey.com/png/detail/74-748162_apple-macbook-gold-netbook.png' alt={'hey'}
                     ratio='1/1' />

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
                    Welcome to Kan GreenLight Avenue Ltd.
                  </TextMaxLine>
                </NextLink>
              </Stack>

              <BgOverlay />
            </Box>
          </Stack>}
        </Stack>
      </RootStyle>
    </Box>
  );
}

