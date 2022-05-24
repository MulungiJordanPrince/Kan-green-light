import React from 'react';
import { useTheme } from '@mui/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Stack } from '@mui/material';

const About = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Stack sx={{ width: 1, marginBottom: {xs: 4, sm: 8, md: 12}, alignItems: 'center' }}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'primary'}
          align={'center'}
        >
          Events
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
          data-aos="fade-up"
        >
          Church Programs and Events.
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
          data-aos="fade-up"
          sx={{maxWidth: 900}}
        >
          You can find all the church programs and events under this page.
          <br />
          Set reminders for Upcoming events, daily programs so that you are not able to miss out on anything.
        </Typography>
      </Stack>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={4}>
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'medium',
              }}
              gutterBottom
              color={'primary'}
            >
              WORSHIP EVENT
            </Typography>
            <Box
              component={Typography}
              fontWeight={700}
              variant={'h4'}
              gutterBottom
            >
              <Typography color="primary" variant="inherit" component="span">
                Come Experience the Love of God
              </Typography>{' '}
              during these events.
            </Box>
            <Typography variant={'h6'} component={'p'} color={'textSecondary'}>
              The Worship evening is here.
              <br />
              Don't miss Great worship come the 26th June 2022.
              <br/>
              The Event will happen on 26th June 2022 starting from 5:00PM to 9:00PM.
            </Typography>
          </Box>
          <List disablePadding>
            {[
              {
                icon: (
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                ),
                title: 'Set a Reminder',
                subtitle:
                  'Mark the date on your calender or set a reminder on your phone.'
              },
              {
                icon: (
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: 'Present yourself ',
                subtitle:
                  'Come to Glorious Church of Christ Ready to Receive from God',
              },
              {
                icon: (
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                ),
                title: 'Share The Event',
                subtitle:
                  'Inform a friend or two about the event and share links of our facebook and youtube channels to friends that cannot make it physically.',
              },
            ].map((item, index) => (
              <ListItem key={index} disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <Box
                    component={Avatar}
                    variant={'rounded'}
                    color={theme.palette.primary.dark}
                    bgcolor={`${theme.palette.primary.light}22`}
                  >
                    {item.icon}
                  </Box>
                </ListItemAvatar>
                <ListItemText primary={item.title} secondary={item.subtitle} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={isMd ? 'fade-left' : 'fade-up'}
        >
          <Box component={Card} boxShadow={4} height={'100%'} width={'100%'}>
            <Box
              component={CardMedia}
              height={'100%'}
              width={'100%'}
              minHeight={300}
              image="https://assets.maccarianagency.com/backgrounds/img20.jpg"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
