import React from 'react';
import { useTheme } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { colors } from '@mui/material';

const Schedules = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'primary'}
          align={'center'}
        >
          Agenda
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
          data-aos="fade-up"
        >
          Event Schedule
        </Box>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Praise and worship.',
            subtitle:
              'Mighty praise and worship led by the glorious church of christ worship team.',
            date: '26th June 2022',
            duration: '4 hours',
            tag: 'Activity',
          },
          {
            title: '1st Preacher',
            subtitle:
              'Word from the first preacher.',
            date: '26th June 2022',
            duration: '1 hour',
            tag: 'Activity',
          },
          {
            title: 'Praise and Worship',
            subtitle:
              'Mighty praise and worship led by the glorious church of christ worship team..',
            date: '26th June 2022',
            duration: '1 hour',
            tag: 'Activity',
          },
          {
            title: '2nd Preacher',
            subtitle:
              'Word from the second preacher.',
            date: '26th June 2022',
            duration: '90 mins',
            tag: 'Activity',
          },
        ].map((item, i) => (
          <Grid item xs={12} key={i} data-aos={'fade-up'}>
            <Box
              component={Card}
              display={'flex'}
              flexDirection={{ xs: 'column', md: 'row' }}
              variant={'outlined'}
              sx={{
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                minWidth={200}
                minHeight={{ xs: 200, md: 'auto' }}
                color={theme.palette.primary.dark}
                bgcolor={`${theme.palette.primary.light}22`}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <svg
                  width={64}
                  height={64}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </Box>
              <CardContent sx={{width: 1}}>
                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                  align={'center'}
                >
                  <Box
                    paddingX={1}
                    color={theme.palette.common.white}
                    bgcolor={colors.red[500]}
                    borderRadius={1}
                  >
                    <Typography
                      color={'inherit'}
                      align={'center'}
                      variant={'subtitle2'}
                    >
                      {item.tag}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant={'subtitle2'}>
                      {item.date} - {item.duration}
                    </Typography>
                  </Box>
                </Box>
                <Box marginTop={1}>
                  <Typography variant={'h6'} gutterBottom>
                    <Box fontWeight={600}>{item.title}</Box>
                  </Typography>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
                <Box display={'flex'} justifyContent={'flex-end'}>
                  <Button size={'large'}>Set Reminder</Button>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Schedules;
