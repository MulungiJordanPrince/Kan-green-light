import { styled } from '@mui/material/styles';
// config
import { HEADER } from '../config';
// layouts
import Layout from '../gcc-layouts';
// components
import { Page } from '../components';
// sections
import ProgramsHero from '../gcc-sections/programs/ProgramsHero';
import Calendar from '../gcc-sections/programs/calendar';
import Newsletter from '../gcc-sections/Newsletter';
import Test from '../gcc-sections/tests';
import GccMinistry from '../gcc-sections/ministries/GccMinistry';

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
    <Page title='Programs'>
      <RootStyle>
        <ProgramsHero />
        <Calendar />
        <Newsletter />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

TravelAboutUsPage.getLayout = function getLayout(page) {
  return <Layout variant='main'>{page}</Layout>;
};
