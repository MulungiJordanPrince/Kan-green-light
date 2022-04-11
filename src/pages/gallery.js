import { styled } from '@mui/material/styles';
// config
import { HEADER } from '../config';
// layouts
import Layout from '../gcc-layouts';
// components
import { Page } from '../components';
// sections
import Newsletter from '../gcc-sections/Newsletter';
import Gallery from '../gcc-sections/gallery';
import GccGalleryHero from '../gcc-sections/gallery/GccGalleryHero';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: HEADER.MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function TravelAboutUsPage() {
  return (
    <Page title='Gallery'>
      <RootStyle>
        <GccGalleryHero />
        <Gallery />
        <Newsletter />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

TravelAboutUsPage.getLayout = function getLayout(page) {
  return <Layout variant='main'>{page}</Layout>;
};
