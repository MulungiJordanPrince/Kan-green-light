// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography, Box, Stack } from '@mui/material';
// utils
import { fShortenNumber } from '../../utils/formatNumber';
// components
import { Image, CountUpNumber } from '../../components';

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    name: 'Web development',
    number: 14000,
    description:
      'Web development services by a company with 10 years of expertise. Professional UX/UI design and implementation of websites, web portals and other solutions.',
  },
  {
    name: 'Branding',
    number: 1050,
    description:
      'Who Needs Help with Brand Identity Design? Everyone. Don\'t attempt this yourself. At this stage, you\'ll definitely want a professional branding agency involved.',
  },
  {
    name: 'Advertising & marketing',
    number: 52000,
    description:
      'Want to effectively reach your target market with creativity and precision? Our Advertising and Marketing Services accomplish that goal for you. Contact us.',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function ElearningAbout() {
  return (
    <RootStyle>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 8 }}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="overline" sx={{ color: 'primary.main' }}>
              KAN GREENLIGHT AVENUE LTD.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Effective Forms Advertising Internet Web Site
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Over 92% of computers are infected with Adware and spyware. Such software is rarely
              accompanied by uninstall utility and even when it is it almost always leaves broken
              Windows
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={8}
          direction={{ md: 'row-reverse' }}
          justifyContent={{ md: 'space-between' }}
          sx={{
            pt: { xs: 8, md: 10 },
          }}
        >
          <Grid item xs={12} md={6} lg={6}>
            <Image
              alt="about"
              src="https://zone-assets-api.vercel.app/assets/images/e-learning/course_about.jpg"
              ratio="3/4"
              sx={{ borderRadius: 2 }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={5}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Stack spacing={{ xs: 5, md: 10 }}>
              {SUMMARY.map((value) => (
                <Box key={value.name}>
                  <Typography variant="h4" sx={{ color: 'text.disabled', opacity: 0.48 }}>
                    {value.name}
                  </Typography>

                  <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
                    <CountUpNumber
                      start={value.number / 2}
                      end={value.number}
                      formattingFn={(value) => fShortenNumber(value)}
                    />
                    +
                  </Typography>

                  <Typography sx={{ color: 'text.secondary' }}>{value.description}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
