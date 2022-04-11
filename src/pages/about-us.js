import { styled } from '@mui/material/styles';
// config
import { HEADER } from '../config';
// _data
import { _testimonials, _members } from '../_mock';
// layouts
import Layout from '../gcc-layouts';
// components
import { Page } from '../components';
// sections
import Newsletter from '../gcc-sections/Newsletter';
import { TestimonialsTravel } from '../gcc-sections/gcc-testimonials';
import { TeamTravelAbout } from '../gcc-sections/gcc-media-team';
import { TravelAbout, TravelAboutOurVision } from '../gcc-sections/about';
import GccAboutStory from '../gcc-sections/about/GccAboutStory';

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
    <Page title="About Us - Travel">
      <RootStyle>
        <TravelAbout />

        <TravelAboutOurVision />

        <GccAboutStory />

        <TeamTravelAbout members={_members} />

        <TestimonialsTravel testimonials={_testimonials} />

        <Newsletter />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

TravelAboutUsPage.getLayout = function getLayout(page) {
  return <Layout variant='main'>{page}</Layout>;
};
