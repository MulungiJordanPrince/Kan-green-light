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

export default function Landingservices(){
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
          Services
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
        >
          Read about our Services
        </Box>
        <Typography
          variant='body1'
          component='p'
          color={'textSecondary'}
          align={'center'}
        >
          Want to know more about our service? Take take and read through..
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {[
          {
            title: 'Branding',
            subtitle:
              ' Our task is to re-brand the store and represent a new concept.  We create expressions for brands that are unique, unambiguous and consistent, and initiate, create digital products with new or different characteristics that offer new or additional benefits to the customer. Our work includes content websites and subscriptions, web applications suites, script installations, e-commerce bundles and consulting services. ',
            media: 'https://www.marketingdonut.co.uk/sites/default/files/branding_overview_371705137.jpg',
          },
          {
            title: 'Advertising',
            subtitle:
              'We foster brand affinity through a continuous marketing dialogue which results in an interactive and intimate relationship between a brand and its audience. We initiate and sustain this relationship through website and blog development, landing pages, sales promotions, branded e-mails, social media, event design, sponsorship, product and services launches.',
            media: 'http://www.nelsonlive.co.nz/wp-content/uploads/2018/06/Advertising-Agency-in-el-paso-tx.jpg',
          },
          {
            title: 'Content Development',
            subtitle:
              'We listen to our clients requirements first and then identify what you wish to achieve. We then develop ideas to determine structure and technology\'s that suits your requirements. We also study your market/industry to analyze it thoroughly to design the user-friendly optimal solution. After a few discussions we will come on one page with you to design and develop the solution.',
            media: 'http://www.internetconsultinginc.com/wp-content/uploads/2017/01/content-development.jpg',
          },
          {
            title: 'Website Development',
            subtitle:
              '\n' +
                'We undertake unique and challenging business requirements and work within clients’ economical resources to transform any online vision into reality. Our unique creations and expertise in usability and web accessibility standards enable cognitive and stylish user friendly interfaces that convert interactions with the web into experiences that are emotional and unforgettable..',
            media: 'https://www.webworxtechnology.com/wp-content/uploads/2018/06/web-development.jpg',
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