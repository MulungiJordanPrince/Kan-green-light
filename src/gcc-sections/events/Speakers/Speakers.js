import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import YoutubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Speakers = () => {
    return (
        <Box>
            <Box marginBottom={4}>
                <Box
                    component={Typography}
                    fontWeight={700}
                    variant={'h3'}
                    gutterBottom
                    align={'center'}
                >
                    Our Preachers
                </Box>
                <Typography
                    variant={'h6'}
                    component={'p'}
                    color={'textSecondary'}
                    align={'center'}
                    data-aos="fade-up"
                >
                    A number of successful events that have happened previously.
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {[
                    {
                        name: 'Dr.Isaac Kituuka',
                        title: 'Senior Pastor and Founder',
                        avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
                    },
                    {
                        name: 'Pr.Apollo Tayebwa',
                        title: 'Associate Pastor',
                        avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
                    },
                    {
                        name: 'Pr.Ssozi Joram',
                        title: 'Associate Pastor',
                        avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
                    },
                    {
                        name: 'Pr.Prossy Kituuka',
                        title: 'Associate Pastor',
                        avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
                    },
                    {
                        name: 'Pr.Kyomuhendo',
                        title: 'Associate Pastor',
                        avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
                    },
                    {
                        name: 'Pr.Bruce Mpamizo',
                        title: 'Associate Pastor',
                        avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
                    },
                ].map((item, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i} data-aos={'fade-up'}>
                        <Box component={Card} boxShadow={0} bgcolor={'transparent'} >
                            {/*<Box*/}
                            {/*    component={CardMedia}*/}
                            {/*    borderRadius={2}*/}
                            {/*    width={'100%'}*/}
                            {/*    height={'100%'}*/}
                            {/*    minHeight={320}*/}
                            {/*    image={item.avatar}*/}
                            {/*/>*/}
                            <Box
                                component={CardContent}
                                bgcolor={'transparent'}
                                marginTop={0}
                            >
                                <Box component={Card} borderRadius={2}>
                                    <CardContent>
                                        <ListItemText primary={item.name} secondary={item.title}/>
                                        <Box marginTop={2}>
                                            <IconButton aria-label="facebook" size={'small'}>
                                                <FacebookIcon/>
                                            </IconButton>
                                            <IconButton aria-label="youtube" size={'small'}>
                                                <YoutubeIcon/>
                                            </IconButton>
                                        </Box>
                                    </CardContent>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Speakers;
