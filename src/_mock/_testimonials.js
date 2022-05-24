import _mock from './_mock';

// ----------------------------------------------------------------------

export const _testimonials = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  role: _mock.role(index),
  avatar: _mock.image.avatar(index),
  rating: 5,
  review:
    '.Ever since i understood the message of the "New Life", my life has changed and i have seen God work for me in various area of my life.',
}));
