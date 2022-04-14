// next
import dynamic from 'next/dynamic';
// @mui
import { styled } from '@mui/material/styles';
// config
import { HEADER } from '../config';
// _data
import { _offices } from '../_mock';
// layouts
import Layout from '../gcc-layouts';
// components
import { Page } from '../components';
// sections
import Newsletter from '../gcc-sections/Newsletter';
import { CareerContactInfo, CareerContactForm } from '../gcc-sections/contact';
//
const ContactMap = dynamic(() => import('../components/map/ContactMap'));

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
        <CareerContactInfo />

        <ContactMap />

        <CareerContactForm />

        <Newsletter />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

CareerContactUsPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};
