// @mui
import { styled } from '@mui/material/styles';
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
} from '@mui/lab';
import { Stack, Typography, Container } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    year: 'First',
    title: 'Affirm your Identity in Christ',
    description:
      'As a Christian, you should always affirm your identity in Christ Jesus.',
  },
  {
    year: 'Second',
    title: 'What are we in Christ',
    description:
      'We are nw creatures bought by the precious Blood of Jesus.',
  },
  {
    year: 'Third',
    title: 'Pray',
    description:
      'Prayer should be part of every Christian's life.',
  },
  {
    year: 'Fourth',
    title: 'Have Faith',
    description:
      'As a Christian of the new Convenant, you should always have Faith and Believe that God has answered your paryers.',
  },
];

const COLORS = ['primary', 'secondary', 'warning', 'success'];

const RootStyle = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.neutral,
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function GccAboutStory() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <RootStyle>
      <Container>
        <Stack
          spacing={3}
          sx={{
            maxWidth: 480,
            textAlign: 'center',
            mx: 'auto',
            mb: { xs: 8, md: 15 },
          }}
        >
          <Typography variant="h2">Our Story</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Background Glorious Church Of Christ ministries Bunamwaya Located 200M from Bunamwaya-Ngobe Road, P.O.Box 259 Nateete-Kampala-Uganda started as a cell group of mutundwe Christian fellowship under miracle Centre church Mutundwe-kabaawo Zone, Kampala, Uganda and developed into church under the home of Mr. Lule, Kisigula Road. Since then it has gone through different stages and rental places with semi structure until To-date where it owns a home with permanent structure for school of ministry and semi permanent tent for the church.
          </Typography>
        </Stack>

        <Timeline position={isDesktop ? 'alternate' : 'right'}>
          {CORE_VALUES.map((value, index) => {
            const { title, description, year } = value;
            return (
              <TimelineItem
                key={title}
                sx={{
                  '&:before': {
                    display: { xs: 'none', md: 'block' },
                  },
                }}
              >
                <TimelineSeparator>
                  <TimelineDot color={COLORS[index]} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                  <Typography variant="subtitle3" sx={{ color: `${COLORS[index]}.main` }}>
                    {year}
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 0.5, mb: 1 }}>
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      maxWidth: { md: 360 },
                      ...(index % 2 && {
                        ml: 'auto',
                      }),
                    }}
                  >
                    {description}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Container>
    </RootStyle>
  );
}
