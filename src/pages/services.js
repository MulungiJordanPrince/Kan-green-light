import { styled } from '@mui/material/styles';
// config
import { HEADER } from '../config';
// layouts
import Layout from '../gcc-layouts';
// components
import { Page } from '../components';
import Newsletter from '../gcc-sections/Newsletter';
import Ministries from '../gcc-sections/ministries';

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
    <Page title='Services'>
      <RootStyle>
        <Ministries />
        <Newsletter />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

TravelAboutUsPage.getLayout = function getLayout(page) {
  return <Layout variant='main'>{page}</Layout>;
};
