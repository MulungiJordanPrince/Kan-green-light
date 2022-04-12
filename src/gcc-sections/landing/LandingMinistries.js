/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import NextLink from 'next/link'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TextMaxLine from '../../components/TextMaxLine';

export default function LandingMinistries(){
  const theme = useTheme();

  return (
    <Box sx={{py: 4, px: { xs: 2, sm: 6, md: 12 }}}>
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
          Ministries
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
        >
          Read about our Ministries
        </Box>
        <Typography
          variant='body1'
          component='p'
          color={'textSecondary'}
          align={'center'}
        >
          We've helped some great companies brand, design and get to market.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {[
          {
            title: 'Professionals Ministry',
            subtitle:
              'This is one of the various Ministries at Glorious church of Christ (GCC). In our diverse professions like medical, Legal, Accounts, Engineer etc. we come together and advance the Kingdom of God. Programs are managed by a committee of 12 professionals',
            media: 'https://gcc-store.s3.amazonaws.com/images/70d13b59-2d6f-4e55-b410-2dbf7916d7e8.jpg',
          },
          {
            title: 'Intercessory',
            subtitle:
              'The mission of the intercessory Ministry is to work behind the scenes to edify and cover the entire Restoration Temple family through prayer.',
            media: 'https://gcc-store.s3.us-east-2.amazonaws.com/Images/Ministries/Intercessory/Intercessory.jpeg',
          },
          {
            title: 'Married Ministry',
            subtitle:
              'As married couples living in a time when Gods standard has become distorted by the evil desires of man.',
            media: 'https://gcc-store.s3.us-east-2.amazonaws.com/Images/Ministries/married/married.jpg',
          },
          {
            title: 'Youth Ministry',
            subtitle:
              'To help youth become aware of God as revealed in Jesus Christ, to respond to Christ in a personal commitment of faith, and to follow God’s will in the full meaning of church membership and Christian discipleship.',
            media: 'https://gcc-store.s3.us-east-2.amazonaws.com/Images/Ministries/youth/children.jpeg',
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Box
              component={'a'}
              href={'#0'}
              display={'block'}
              width={'100%'}
              height={'100%'}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={'100%'}
                height={'100%'}
                data-aos={'fade-up'}
                borderRadius={3}
              >
                <CardMedia
                  image={item.media}
                  title={item.title}
                  sx={{
                    height: 140,
                  }}
                />
                <Box component={CardContent}>
                  <Box
                    component={Typography}
                    variant={'h6'}
                    gutterBottom
                    fontWeight={500}
                    align={'left'}
                  >
                    {item.title}
                  </Box>
                  <TextMaxLine
                    line={3}
                    align={'left'}
                    variant={'body2'}
                    color="textSecondary"
                  >
                    {item.subtitle}
                  </TextMaxLine>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
        <Grid item container xs={12} justifyContent={'center'}>
            <NextLink href='/ministries' passHref>
          <Button
            color={'primary'}
            variant={'contained'}
            size={'large'}
            endIcon={<ChevronRightIcon />}
          >
            Read all
          </Button>
            </NextLink>
        </Grid>
      </Grid>
    </Box>
  );
};