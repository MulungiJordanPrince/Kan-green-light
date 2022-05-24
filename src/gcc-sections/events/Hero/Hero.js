import React from 'react';
import {useTheme} from '@mui/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import useCountdown from '../../../hooks/useCountdown';

const Hero = () => {
    const theme = useTheme();
    const countdown = useCountdown(new Date('06/26/2022 05:00'));

    return (
        <Box>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Box width={1} height="100%" display="flex" alignItems="center">
                        <Box>
                            <Typography
                                variant="h2"
                                align="left"
                                gutterBottom
                                sx={{
                                    color: theme.palette.common.white,
                                    fontWeight: 900,
                                }}
                            >
                               WORSHIP EVENING
                                <br/>
                                26th June 2022
                            </Typography>
                            <Box>
                                <Typography
                                    variant="h5"
                                    component="p"
                                    textAlign='center'
                                    sx={{
                                        width: 1,
                                        lineHeight: 2,
                                        color: theme.palette.common.white,
                                        fontWeight: 400,
                                    }}
                                >
                                    THEME
                                    <br/>
                                    Let all that I am Worship the Lord; may I never forget the good things He does for me.
                                    <br/>
                                    Psalms 103:2
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box width={1} height="100%" display="flex" alignItems="center">
                        <Box
                            padding={{xs: 3, sm: 6}}
                            width={'100%'}
                            component={Card}
                            borderRadius={2}
                            boxShadow={4}
                        >
                            <Box
                                display="flex"
                                flexDirection={'row'}
                                justifyContent={'space-around'}
                            >
                                <Box display="flex" flexDirection={'column'} alignItems={'center'}>
                                    <Typography
                                        variant={'h3'}
                                        sx={{
                                            fontWeight: 900,
                                        }}
                                    >
                                        {countdown.days}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                        }}
                                    >
                                        Days
                                    </Typography>
                                </Box>
                                <Box display="flex" flexDirection={'column'} alignItems={'center'}>
                                    <Typography
                                        variant={'h3'}
                                        sx={{
                                            fontWeight: 900,
                                        }}
                                    >
                                        {countdown.hours}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 900,
                                        }}
                                    >
                                        Hours
                                    </Typography>
                                </Box>
                                <Box display="flex" flexDirection={'column'} alignItems={'center'}>
                                    <Typography
                                        variant={'h3'}
                                        sx={{
                                            fontWeight: 900,
                                        }}
                                    >
                                        {countdown.minutes}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 900,
                                        }}
                                    >
                                        Minutes
                                    </Typography>
                                </Box>
                                <Box display="flex" flexDirection={'column'} alignItems={'center'}>
                                    <Typography
                                        variant={'h3'}
                                        sx={{
                                            fontWeight: 900,
                                        }}
                                    >
                                        {countdown.seconds}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 900,
                                        }}
                                    >
                                        Seconds
                                    </Typography>
                                </Box>
                            </Box>
                            <Box marginTop={4}>
                                <Button
                                    sx={{height: 54}}
                                    variant="contained"
                                    color="primary"
                                    size="medium"
                                    fullWidth
                                >
                                    Get a reminder
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Hero;
