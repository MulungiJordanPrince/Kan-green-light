/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import {Container} from "@mui/material";
import {PlayerWithImage} from "../../components/player";

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0),
  },
}));

const TypographyStyle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    left: 0,
    right: 0,
    zIndex: 9,
    margin: 'auto',
    position: 'absolute',
    color: theme.palette.common.white,
  },
}));

// ----------------------------------------------------------------------

export default function LandingVideo() {

  const video = `https://www.youtube.com/embed/GoaH2VHzIuY`;

  return (
      <Box sx={{ py: {sx: 4, md: 12}, px: { xs: 2, sm: 6, md: 12 } }}>
      <RootStyle>
        <Container sx={{ position: 'relative' }}>
          <TypographyStyle variant="h2" sx={{ mb: 5, top: { md: 80 } }}>
            Our Vision
          </TypographyStyle>

          <PlayerWithImage
              imgPath="https://i.ytimg.com/vi_webp/GoaH2VHzIuY/sddefault.webp"
              videoPath="https://www.youtube.com/embed/GoaH2VHzIuY"
          />

          <TypographyStyle
              variant="h4"
              sx={{ mt: 5, maxWidth: 564, bottom: { md: 80 }, opacity: { md: 0.72 } }}
          >
            To bring value to the Marketing and digital landscape of the country and contributing our part in the economy.
          </TypographyStyle>
        </Container>
      </RootStyle>
  </Box>
  );
};

