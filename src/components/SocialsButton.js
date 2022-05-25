import PropTypes from 'prop-types';
// @mui
import { alpha } from '@mui/material/styles';
import { Link, Stack, Button, Tooltip, IconButton } from '@mui/material';
//
import Iconify from './Iconify';

// ----------------------------------------------------------------------

SocialsButton.propTypes = {
  initialColor: PropTypes.bool,
  links: PropTypes.objectOf(PropTypes.string),
  simple: PropTypes.bool,
  sx: PropTypes.object,
};

export default function SocialsButton({ initialColor = false, simple = true, links = {}, sx, ...other }) {
  const SOCIALS = [
    {
      name: 'FaceBook',
      icon: 'eva:facebook-fill',
      socialColor: '#1877F2',
      path: '#https://www.youtube.com/redirect?event=channel_banner&redir_token=QUFFLUhqbVRYLTdPRUNhVmhqeTh5d1VqQnJKVDBhelVoQXxBQ3Jtc0tsWk4xeFJQbWpqZkd5TlRrQzFOTmU0dTZleEVtOV9sS0hCeHBjcVpienJPSDJ2RlpQSkFVUWtxS2VndTRSUWVtd3doYnkycE84RU94ay1fYkZMSnY1cFZtQ2gyd1dhQ0xNSWRzUFphZkJ0VVJWMGVEcw&q=https%3A%2F%2Fwww.facebook.com%2FGloriousChurchOfChristMinistries',
    },
    {
      name: 'Instagram',
      icon: 'ant-design:instagram-filled',
      socialColor: '#E02D69',
      path: '#https://www.youtube.com/redirect?event=channel_banner&redir_token=QUFFLUhqbE41ZXlCRFVPOEQ0MEJTa3FEdklBaTBGSGM0UXxBQ3Jtc0ttVzNqLXd6NXpSeGdUcDdQWjV3N193V0F0aFdzXzczajBibXdBbTNxR1RHNDhXejViMnpLY2x2Q0swMThBdk1uUHFvNk5pX1VRNmZyYW9leEhmYzhGU1JTYlJHSEc0RnZ2RGVGTVFtOHR6bDIyZFEtOA&q=https%3A%2F%2Fwww.instagram.com%2Fgloriouschurchofchristug%2F',
    },
    {
      name: 'Youtube',
      icon: 'eva:youtube-fill',
      socialColor: '#007EBB',
      path: '#https://www.youtube.com/channel/UCnSTVCj5cCr0XIGUFQu1yqw?sub_confirmation=1',
    },
    {
      name: 'Twitter',
      icon: 'eva:twitter-fill',
      socialColor: '#00AAEC',
      path: 'https://www.youtube.com/redirect?event=channel_banner&redir_token=QUFFLUhqbmJxZWRSSkU0TDhEYXc3Z09uZGFnVmJzRC1nUXxBQ3Jtc0ttMlFHbjNaSlU0VW5EMFVDWlYwQWU2cXNRZUE5dE9CM1pZZXFLcU9fTnNCZlNzN1hEM1BRYmh1RG8ySy1OMDRMQWx1US1vMzJlcHFOT09kZ2swQ05WUzhiQzZibkZFZHg0N3UwRV9TeUFpREQwcjczWQ&q=https%3A%2F%2Ftwitter.com%2Fgloriouschug',
    },
  ];

  return (
    <Stack direction="row" flexWrap="wrap" alignItems="center">
      {SOCIALS.map((social) => {
        const { name, icon, path, socialColor } = social;
        return simple ? (
          <Link key={name} href={path}>
            <Tooltip title={name} placement="top">
              <IconButton
                color="inherit"
                sx={{
                  ...(initialColor && {
                    color: socialColor,
                    '&:hover': {
                      bgcolor: alpha(socialColor, 0.08),
                    },
                  }),
                  ...sx,
                }}
                {...other}
              >
                <Iconify icon={icon} sx={{ width: 20, height: 20 }} />
              </IconButton>
            </Tooltip>
          </Link>
        ) : (
          <Button
            key={name}
            href={path}
            color="inherit"
            variant="outlined"
            size="small"
            startIcon={<Iconify icon={icon} />}
            sx={{
              m: 0.5,
              flexShrink: 0,
              ...(initialColor && {
                color: socialColor,
                borderColor: socialColor,
                '&:hover': {
                  borderColor: socialColor,
                  bgcolor: alpha(socialColor, 0.08),
                },
              }),
              ...sx,
            }}
            {...other}
          >
            {name}
          </Button>
        );
      })}
    </Stack>
  );
}
