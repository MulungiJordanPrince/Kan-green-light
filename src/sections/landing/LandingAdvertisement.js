// material
import {styled} from '@mui/material/styles';
import {Box, Button, Container, Typography} from '@mui/material';
//
import {MotionInView, varFadeInDown} from '../../components/animate';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({theme}) => ({
    maxWidth: 456,
    margin: 'auto',
    overflow: 'hidden',
    paddingBottom: theme.spacing(10),
    borderRadius: theme.shape.borderRadiusMd,
    backgroundImage: `linear-gradient(135deg,
    ${theme.palette.primary.main} 0%,
    ${theme.palette.primary.dark} 100%)`,
    [theme.breakpoints.up('md')]: {
        display: 'flex',
        maxWidth: '100%',
        paddingBottom: 0,
        alignItems: 'center'
    }
}));

// ----------------------------------------------------------------------

export default function LandingAdvertisement() {

    return (
        <Container maxWidth="lg">
            <ContentStyle>

                <Box
                    sx={{
                        pl: {md: 10},
                        textAlign: {xs: 'center', md: 'left'}
                    }}
                >
                    <MotionInView variants={varFadeInDown} sx={{color: 'common.white', mb: 5}}>
                        <Typography variant="h2">
                            Get started with
                            <br/> Web Droid today
                        </Typography>
                    </MotionInView>
                    <MotionInView variants={varFadeInDown}>
                        <Button
                            size="large"
                            variant="contained"
                            to={'/contact-us'}
                            sx={{
                                whiteSpace: 'nowrap',
                                boxShadow: (theme) => theme.customShadows.z8,
                                color: (theme) => theme.palette.getContrastText(theme.palette.common.white),
                                bgcolor: 'common.white',
                                '&:hover': {bgcolor: 'grey.300'}
                            }}
                        >
                            Hire Us Now
                        </Button>
                    </MotionInView>
                </Box>
            </ContentStyle>
        </Container>
    );
}
