// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Home',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/',
  },
  {
    title: 'Gallery',
    icon: <Iconify icon={'ic:round-grain'} {...ICON_SIZE} />,
    path: '/gallery',
  },

  {
    title: 'Services',
    icon: <Iconify icon={'ic:round-grain'} {...ICON_SIZE} />,
    path: '/services',
  },

  {
    title: 'About us',
    icon: <Iconify icon={'ic:round-grain'} {...ICON_SIZE} />,
    path: '/about-us',
  },
  {
    title: 'Contact us',
    icon: <Iconify icon={'ic:round-grain'} {...ICON_SIZE} />,
    path: '/contact-us',
  }
];

export default menuConfig;
