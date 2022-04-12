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
        "https://zone-assets-api.vercel.app/assets/images/travel/travel_4.jpg",
        "https://zone-assets-api.vercel.app/assets/images/travel/travel_5.jpg",
        "https://zone-assets-api.vercel.app/assets/images/travel/travel_6.jpg"
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
              Background Glorious Church Of Christ ministries Bunamwaya Located 200M from Bunamwaya-Ngobe Road, P.O.Box 259 Nateete-Kampala-Uganda started as a cell group of mutundwe Christian fellowship under miracle Centre church Mutundwe-kabaawo Zone, Kampala, Uganda and developed into church under the home of Mr. Lule, Kisigula Road. Since then it has gone through different stages and rental places with semi structure until To-date where it owns a home with permanent structure for school of ministry and semi permanent tent for the church.
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
              Church Vision
              <br/>
              A Glorious church that is blameless without spot or wrinkle.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Typography variant="h4" paragraph>
            About Our Founder (Dr.Isaac Kituuka)
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
              He was born on 20th-04-1967 he is married to Mrs Prossy Kituuka and the Lord has blessed them with Mwesigwa Timothy, Tandeka Samuel, Mulungi Jordan, and Kituuka Isaac (JR)..
            <br />
            <br />
              He got born again in 1990 at Makekere University Kampala (Muk), as he was finishing his first year at the university he had spent most of his time out of lectures looking for money and spending it loosely, they told him with God all things are possible he feared to expelled from the University and tried Jesus.
              <br/>
              Having been Born in a very remote place, poor family, grew up with the single father, when he joined the University, he had to look for money to keep up with the university standards, hence missing most lectures, Exams were very hard for him and amidst that confusion and fear he heard the Gospel and gave his life to Jesus who faithfully lead him through the university Successfully.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
