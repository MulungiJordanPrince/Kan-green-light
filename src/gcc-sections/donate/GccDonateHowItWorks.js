import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

export default function GccDonateHowItWorks(){
  const theme = useTheme();

  return (
    <Box sx={{py: 6, px: { xs: 2, sm: 6, md: 12 }}}>
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
          give online
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
        >
          How it works
        </Box>
      </Box>
      <Grid container spacing={4}>
        {[
          {
            title: 'Click on the give online button above.',
            subtitle:
              'This will open up a dialog that will provide you where to enter your details for the amount and payment method',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                color='#fff'
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            ),
          },
          {
            title: 'Enter the required info.',
            subtitle:
              'Enter amount to give and then and then choose the payment method to be used for the transactions.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                color='#fff'
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            ),
          },
          {
            title: 'Completion Step.',
            subtitle:
              'Thanks for the support! May God bless you always.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                color='#fff'
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ),
          },
        ].map((item, i) => (
          <Grid key={i} item xs={12} md={4} data-aos={'fade-up'}>
            <Box
              component={Avatar}
              marginBottom={2}
              variant="rounded"
              bgcolor={theme.palette.primary.main}
            >
              <Box>{item.icon}</Box>
            </Box>
            <Typography variant="h6" align={'left'} gutterBottom>
              {item.title}
            </Typography>
            <Typography color="text.secondary" align={'left'} component="p">
              {item.subtitle}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

