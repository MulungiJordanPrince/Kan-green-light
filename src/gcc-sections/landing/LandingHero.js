import React, {useRef} from 'react';
import NextLink from 'next/link'
// utils
import cssStyles from '../../utils/cssStyles';
import {Breadcrumbs, CarouselArrows, CarouselDots, Iconify, Image, TextIconLabel} from '../../components';
import {Box, Button, Card, CardContent, CardHeader, Container, Link, Stack, Typography} from '@mui/material';
import baggageClaim from '@iconify/icons-carbon/baggage-claim';
import user from '@iconify/icons-carbon/user';
import slots from '@iconify/icons-carbon/calendar-heat-map';
import cloudUpload from '@iconify/icons-carbon/cloud-upload';
import {useResponsive} from '../../hooks';
import {styled} from '@mui/material/styles';
import Newsletter from '../Newsletter';
import {CarouselBasic3} from '../../sections/overview/extra/carousel';
import LandingCarousel from './LandingCarousel';
import Slider from "react-slick";
import PropTypes from "prop-types";

// ----------------------------------------------------------------------

const CarouselStyle = styled(Box)(({theme}) => ({
    position: 'relative',
    height: '100%',
    '& .slick-list': {
        boxShadow: theme.customShadows.z16,
        borderRadius: 0,
    },
}));

const RootStyle = styled('div')(({theme}) => ({
    marginBottom: 0,
    height: '100%',
    ...cssStyles(theme).bgImage(),
}));

const RootContainerStyle = styled(Container)(({theme}) => ({
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(10),
    marginBottom: 10,
}));

// ----------------------------------------------------------------------

export default function LandingHero() {

    const isDesktop = useResponsive('up', 'md');
    const carouselRef = useRef(null);

    const settings = {
        dots: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <RootStyle>
                <>
                    <Stack
                        spacing={5}
                        direction={{xs: 'column', md: 'row'}}
                        justifyContent={{md: 'space-between'}}
                        alignItems={{xs: 'flex-start', md: 'center'}}
                        sx={{height: 1}}
                    >
                        <RootContainerStyle>
                            <Stack spacing={{xs: 3, md: 5}} sx={{maxWidth: 400, color: 'common.white'}}>
                                <Breadcrumbs
                                    onDark
                                    links={[
                                        {name: 'KGA'},
                                    ]}
                                />
                                <Typography variant='h3' component='h1' sx={{mb: 3}}>
                                    KAN GREENLIGHT AVENUE LTD.
                                </Typography>

                                <Stack spacing={3} direction={{xs: 'column', md: 'row'}} sx={{opacity: 0.48}}>
                                    <TextIconLabel
                                        icon={<Iconify icon={baggageClaim} sx={{width: 20, height: 20, mr: 1}}/>}
                                        value={
                                            <Link color='inherit'>
                                                Services
                                            </Link>
                                        }
                                    />
                                    <TextIconLabel
                                        icon={<Iconify icon={user} sx={{width: 20, height: 20, mr: 1}}/>}
                                        value='Kan GreenLight '
                                    />
                                    <TextIconLabel
                                        icon={<Iconify icon={slots} sx={{width: 20, height: 20, mr: 1}}/>}
                                        value={`9 Services`}
                                    />
                                </Stack>
                                <Stack>
                                    <Typography variant='caption' component='p'>
                                        Turning your Dream into Digital Reality!
                                    </Typography>
                                </Stack>
                                <NextLink href='/contact-us' passHref>
                                    <Button fullWidth variant='contained' size='large'
                                            startIcon={<Iconify icon={cloudUpload}/>}>
                                        Contact Us
                                    </Button>
                                </NextLink>
                            </Stack>
                        </RootContainerStyle>

                        {isDesktop && <Stack
                            spacing={2}
                            direction='row'
                            alignItems='center'
                            justifyContent='flex-end'
                            sx={{width: 1, height: 1, maxHeight: 500}}
                            style={{height: '100%',}}
                        >
                            <Box
                                sx={{
                                    height: 1,
                                    maxHeight: 500,
                                    maxWidth: 700,
                                    width: 1,
                                    clipPath: 'polygon(10% 0%, 100% 0px, 100% 100%, 0% 100%)',
                                    shapeOutside: 'polygon(10% 0%, 100% 0px, 100% 100%, 0% 100%)',
                                }}
                                style={{height: '100%',}}
                            >
                                <Card sx={{borderRadius: 0, height: '100%'}}>
                                    <CarouselStyle>
                                        <Slider ref={carouselRef} {...settings}>
                                            {[
                                                "https://cubeqbusiness.com/wp-content/uploads/2021/10/Graphic-designer.jpg",
                                                "https://marketsplash.com/content/images/2021/03/Brand-Marketing-1.png",
                                                "https://www.bennettgraphics.com/bennettgraphicswordpress/wp-content/uploads/2015/06/bennett-graphics-31.jpg"
                                            ].map((item, index) => (
                                                <CarouselItem key={index} item={item}/>
                                            ))}
                                        </Slider>
                                    </CarouselStyle>
                                </Card>
                            </Box>

                        </Stack>}
                    </Stack>
                </>
            </RootStyle>
        </>
    );
}

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
    }),
};

function CarouselItem({ item }) {

    return <Image alt='KGA' src={item} ratio="16/11" />;
}

//['4/3', '3/4', '6/4', '4/6', '16/9', '9/16', '21/9', '9/21', '1/1', '29/11']
