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
            Pastor's Word
          </Typography>
          <Typography variant={'h3'} gutterBottom align={'center'}>
            <Box fontWeight={600} component={'span'}>
              Pr.Isaac Kituuka
            </Box>
          </Typography>
          <Typography
            variant='body1'
            component='p'
            color={'textSecondary'}
            align={'center'}
            gutterBottom
          >
            "G.C.C honours and respect the body of Christ, we work with other ministries churches and organisations that
            advance the body of christ activities and submit to the Lordship of Jesus Christ in Uganda and beyond."
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
                  src={'https://gcc-store.s3.amazonaws.com/images/70d13b59-2d6f-4e55-b410-2dbf7916d7e8.jpg'}
                />
              </ListItemAvatar>
              <ListItemText
                primary={'Pr.Isaac Kituuka'}
                secondary={' Team Leader-Pastor of Glorious Church Of Christ'}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

