// layouts
import Layout from '../gcc-layouts';
// components
import Page from '../components/Page';
// sections
import { styled } from '@mui/material/styles';
import { HEADER } from '../config';
import React from 'react'
import LandingHero from '../gcc-sections/landing/LandingHero';
import LandingPropheticEvent from '../gcc-sections/landing/LandingPropheticEvent';
import PastorsWord from '../gcc-sections/landing/PastorsWord';
import LandingAbout from '../gcc-sections/landing/LandingAbout';
import LandingMinistries from '../gcc-sections/landing/LandingMinistries';
import LandingVideo from '../gcc-sections/landing/LandingVideo';
import Newsletter from '../gcc-sections/Newsletter';

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
        <Page title='Home'>
            <RootStyle>
                <LandingHero />
                <LandingPropheticEvent />
                <LandingAbout />
                <LandingVideo />
                <PastorsWord />
                <LandingMinistries />
                <Newsletter />
            </RootStyle>
        </Page>
    );
}
