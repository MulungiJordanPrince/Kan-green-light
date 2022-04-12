import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Stack, Box } from '@mui/material';
//
import TeamTravelMember from './TeamTravelMember';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0, 15, 0),
  },
}));

// ----------------------------------------------------------------------

TeamTravelAbout.propTypes = {
  members: PropTypes.array.isRequired,
};

//https://gcc-store.s3.amazonaws.com/images/fb%2049.jpg

export default function TeamTravelAbout() {

    const members = [
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
            "name": "Jayvion Simon",
            "role": "UX Designer",
            "photo": "https://gcc-store.s3.amazonaws.com/images/fb%2049.jpg",
            "socialLinks": {
                "facebook": "facebook/Jayvion Simon",
                "instagram": "instagram/Jayvion Simon",
                "linkedin": "linkedin/Jayvion Simon",
                "twitter": "twitter/Jayvion Simon"
            }
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
            "name": "Lucian Obrien",
            "role": "Full Stack Designer",
            "photo": "https://gcc-store.s3.amazonaws.com/images/E5D8CAFA-3BA5-466D-AA1F-0723939E8C6C.jpeg",
            "socialLinks": {
                "facebook": "facebook/Lucian Obrien",
                "instagram": "instagram/Lucian Obrien",
                "linkedin": "linkedin/Lucian Obrien",
                "twitter": "twitter/Lucian Obrien"
            }
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
            "name": "Deja Brady",
            "role": "Backend Developer",
            "photo": "https://gcc-store.s3.amazonaws.com/images/fb%202.jpg",
            "socialLinks": {
                "facebook": "facebook/Deja Brady",
                "instagram": "instagram/Deja Brady",
                "linkedin": "linkedin/Deja Brady",
                "twitter": "twitter/Deja Brady"
            }
        },
        {
            "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
            "name": "Harrison Stein",
            "role": "UX Designer",
            "photo": "https://gcc-store.s3.amazonaws.com/images/fb%2075.jpg",
            "socialLinks": {
                "facebook": "facebook/Harrison Stein",
                "instagram": "instagram/Harrison Stein",
                "linkedin": "linkedin/Harrison Stein",
                "twitter": "twitter/Harrison Stein"
            }
        },
    ]

  return (
    <RootStyle>
      <Container>
        <Stack
          spacing={3}
          sx={{
            mx: 'auto',
            maxWidth: 480,
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h2">Our Team</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis
            venenatis ante odio sit amet eros.
          </Typography>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            rowGap: { xs: 4, md: 5 },
            columnGap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {members.map((member) => (
            <TeamTravelMember key={member.id} member={member} />
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
