// layouts
import Layout from '../gcc-layouts';
// components
import Page from '../components/Page';
// sections
import { styled } from '@mui/material/styles';
import { HEADER } from '../config';
import React from 'react'
import Newsletter from '../gcc-sections/Newsletter';
import GccDonateHero from '../gcc-sections/donate/GccDonateHero';
import GccDonateHowItWorks from '../gcc-sections/donate/GccDonateHowItWorks';
import GccDonateOthers from '../gcc-sections/donate/GccDonateOthers';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER.MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

index.getLayout = function getLayout(page) {
  return <Layout variant='main'>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function index() {

  return (
    <Page title='Donate'>
      <RootStyle>
        <GccDonateHero />
        <GccDonateHowItWorks />
        <GccDonateOthers />
        <Newsletter />
      </RootStyle>
    </Page>
  );
}
