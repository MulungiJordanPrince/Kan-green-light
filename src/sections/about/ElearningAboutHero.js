// @mui
import { styled, alpha } from '@mui/material/styles';
import { Grid, Container, Typography, Button } from '@mui/material';
// components
import { Image } from '../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: alpha(theme.palette.primary.main, 0.08),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function ElearningAboutHero() {
  return (
    <RootStyle>
      <Container>
        <Grid container spacing={{ xs: 8, md: 3 }} justifyContent="space-between">
          <Grid
            item
            xs={12}
            md={6}
            lg={5}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h1">About Our Company.</Typography>
            <Typography sx={{ mt: 3, mb: 6 }}>
              GREEN LIGHT MARKETING AVENUE LTD. helps companies strategize and implement their creative visions. Our growing Marketing Agency is driven by passionate thinkers who work closely with each brand to create strategies that produce unparalleled results.
            </Typography>

            <Button variant="contained" size="large">
              Contact Us
            </Button>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Image
              alt="courses-online"
              src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_courses_hero.svg"
            />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
