import { styled } from '@mui/material/styles';
// config
import { HEADER } from '../config';
// layouts
import Layout from '../gcc-layouts';
// components
import { Page } from '../components';
import Newsletter from '../gcc-sections/Newsletter';
import GccEvent from '../gcc-sections/events/GccEvent';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER.MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function TravelAboutUsPage() {
  return (
    <Page title='Events'>
      <RootStyle>
        <GccEvent />
        <Newsletter />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

TravelAboutUsPage.getLayout = function getLayout(page) {
  return <Layout variant='main'>{page}</Layout>;
};
