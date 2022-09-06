// @mui
import { Grid, Container, Typography, Box } from '@mui/material';
// utils
import { fShortenNumber } from '../../utils/formatNumber';
// _data
import _mock from '../../_mock';
// components
import { Image, CountUpNumber } from '../../components';

// ----------------------------------------------------------------------

const SUMMARY = [
  { name: 'Facebook', number: 8628 },
  { name: 'Youtube', number: 10676 },
  { name: 'Site visitors', number: 6679 },
  { name: 'Instagram', number: 97000 },
];

// ----------------------------------------------------------------------
//https://gcc-store.s3.amazonaws.com/images/3d0f2a9c-c038-459c-8f78-a5cbfc1c8347.jpg
export default function TravelAbout() {

    const IMAGES = [
        "https://gcc-store.s3.amazonaws.com/images/3d0f2a9c-c038-459c-8f78-a5cbfc1c8347.jpg",
        "https://gcc-store.s3.amazonaws.com/images/fb%2079.jpg",
        "https://gcc-store.s3.amazonaws.com/images/fb%2076.jpg",
        "https://gcc-store.s3.amazonaws.com/images/a58b3f78-f77c-4919-8d3d-86add3023d8f.jpg"
    ]

    console.log('Images: ', IMAGES)

  return (
    <Container>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          py: { xs: 8, md: 10 },
        }}
      >
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <Typography variant="h1" sx={{ mb: 3 }}>
            About Us
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
              Kan GreenLight Avenue Ltd is a trustworthy and agile digital marketing agency that has worked with renowned brands in Uganda in a short span of time. We provide integrated marketing solutions from Web design & development to social media management, content curation, SEO & PPC to maximize your online marketing return. Our highly experienced teams work with integrity & sincerity to turn your dreams into a digital reality.

          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {IMAGES.map((img, index) => (
          <Grid
            key={img}
            item
            xs={12}
            sm={6}
            md={index === 0 ? 6 : 2}
            sx={{
              ...((index === 1 || index === 2 || index === 3) && {
                display: { xs: 'none', sm: 'block' },
              }),
            }}
          >
            <Image alt={img} src={img} sx={{ height: 350, borderRadius: 2 }} />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          mt: { xs: 8, md: 10 },
          mb: { xs: 8, md: 15 },
          textAlign: 'center',
          display: 'grid',
          rowGap: 5,
          columnGap: 3,
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {SUMMARY.map((value) => (
          <div key={value.name}>
            <Typography variant="h2" gutterBottom>
              <CountUpNumber
                start={value.number / 5}
                end={value.number}
                formattingFn={(value) => fShortenNumber(value)}
              />

              <Typography
                variant="h4"
                component="span"
                sx={{ verticalAlign: 'top', ml: 0.5, color: 'primary.main' }}
              >
                +
              </Typography>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {value.name}
            </Typography>
          </div>
        ))}
      </Box>

      <Grid
        container
        spacing={{ xs: 5, md: 3 }}
        justifyContent="space-between"
        sx={{ textAlign: { xs: 'center', md: 'left' } }}
      >
        <Grid item xs={12} md={6} lg={5}>
          <Box
            sx={{
              mb: 2,
              width: 24,
              height: 3,
              borderRadius: 3,
              bgcolor: 'primary.main',
              mx: { xs: 'auto', md: 0 },
            }}
          />
          <Typography variant="h3">
            KGA Vision
              <br/>
              To bring value to the Marketing and digital landscape of the country and contributing our part in the economy.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Typography variant="h4" paragraph>
            OUR MISSION & CORE VALUES
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
              To enable businesses to grow by using our effective marketing strategies and to deliver maximum amount of satisfaction to our valuable partners.
            <br />
              You will find us attentive, proactive and highly engaged with our customers. Since "digital" is a fast-moving technology, we move with our customers into building long-term sustainable relationships.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
