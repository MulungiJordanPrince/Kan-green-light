/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

export default function PastorsWord() {
  const theme = useTheme();

  return (
    <Box
      borderRadius={1.5}
      sx={{
        position: 'relative',
        backgroundColor: theme.palette.background.default,
        '&::after': {
          position: 'absolute',
          width: '30%',
          zIndex: 1,
          top: 0,
          right: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${theme.palette.primary.light} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Container
        position='relative'
        zIndex={2}
        sx={{ py: 6, px: { xs: 2, sm: 6, md: 12 } }}
      >
        <Box data-aos={'fade-up'}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'primary'}
            align={'center'}
          >
            C.E.O's BIO
          </Typography>
          <Typography variant={'h3'} gutterBottom align={'center'}>
            <Box fontWeight={600} component={'span'}>
              Mr.Kangume Prince Pickton
            </Box>
          </Typography>
          <Typography
            variant='body1'
            component='p'
            color={'textSecondary'}
            align={'center'}
            gutterBottom
          >
            " Kangume Prince is a Dynamic and passionate marketing personnel with more than 7 years in the marketing industry,
            Expertise in both online and direct marketing campaigns and strategy. Solid understanding of digital marketing, including SEO, PPC, SEM and social media marketing, Creative and innovative team player with strong interpersonal skills. Proficient at collaborating with multiple stakeholders to determine audience interest and develop strategic go-to-market communication plans that align with the company's business priorities and initiatives."
          </Typography>
          <Box
            component={'ul'}
            display={'flex'}
            justifyContent={'center'}
            width={'100%'}
          >
            <Box component={ListItem} disableGutters width={'auto'}>
              <ListItemAvatar>
                <Avatar
                  src={'data:image/jpeg;base64,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'}
                />
              </ListItemAvatar>
              <ListItemText
                primary={'Mr.Kangume Prince Pickton'}
                secondary={' C.E.O and Founder'}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

