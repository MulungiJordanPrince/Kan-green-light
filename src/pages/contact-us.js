// next
import dynamic from 'next/dynamic';
// @mui
import {styled} from '@mui/material/styles';
// config
import {HEADER} from '../config';
// _data
// layouts
import Layout from '../gcc-layouts';
// components
import {Page} from '../components';
// sections
import Newsletter from '../gcc-sections/Newsletter';
import {Container, Grid, Typography} from "@mui/material";
import {MarketingContactForm, MarketingContactInfo} from "../sections/contact";

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER.MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function CareerContactUsPage() {
  return (
    <Page title="Contact Us">
      <RootStyle>
        <Container sx={{ py: { xs: 8, md: 10 } }}>
          <Grid
              container
              spacing={{ xs: 8, md: 3 }}
              justifyContent="space-between"
              direction={{ xs: 'column-reverse', md: 'row' }}
          >
            <Grid item xs={12} md={6} lg={5}>
              <MarketingContactInfo />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <Typography variant="h2" sx={{ mb: 5 }}>
                Ready To Get Started?
              </Typography>
              <MarketingContactForm />
            </Grid>
          </Grid>
        </Container>

        <Newsletter />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

CareerContactUsPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};
