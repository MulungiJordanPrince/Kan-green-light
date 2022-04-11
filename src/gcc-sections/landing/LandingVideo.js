/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { styled } from '@mui/material/styles';

const RootStyle = styled('div')(({ theme }) => ({
  width: '100%',
  borderRadius: '3px',
  boxShadow: '0px 5px 12px -3px rgba(0,0,0,0.5)',
  overflow: 'hidden',
  transform: 'translateZ(0)',
  paddingBottom: '56.25%',
  height: 0,
  boxSizing: 'border-box',
}));

export default function LandingVideo() {

  const [latestVideo, setLatestVideo] = useState(null);

  useEffect(() => {
    axios.get('https://gcc-backend.herokuapp.com/api/gcc/v1/home/1').then(response => {
      setLatestVideo(response.data?.latestVideo || null);
    }).catch(error => {
      console.log("Error: ", error)
      setLatestVideo('pMWjf1dk0Q0')
    });
  }, []);

  return (<Box sx={{ py: 4, px: { xs: 2, sm: 6, md: 12 } }}>
    <Box marginBottom={4}>
      <Typography
        sx={{
          textTransform: 'uppercase', fontWeight: 'medium',
        }}
        gutterBottom
        color={'primary'}
        align={'center'}
      >
        GCCM
      </Typography>
      <Box
        component={Typography}
        fontWeight={700}
        variant={'h3'}
        align={'center'}
        gutterBottom
      >
        Word of Life
      </Box>
      <Typography
        variant='body1'
        component='p'
        color={'textSecondary'}
        align={'center'}
      >
        Praise God brethren, you can call/send/text in your prayer requests here on the platform or you can call these
        numbers for prayers & counseling, +256773832586 or +256702820054.
      </Typography>
    </Box>
    {latestVideo && <RootStyle>
      <iframe
        style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        }}
        width='100%'
        height='100%'
        src={`https://www.youtube.com/embed/${latestVideo}`}
        title='YouTube video player' frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen />
    </RootStyle>}
  </Box>);
};

