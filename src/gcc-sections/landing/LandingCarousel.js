import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useRef } from 'react';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// _mock_
import { _carouselsExample } from '../../_mock';
// components
import Image from '../../components/Image';
import { CarouselDots, CarouselArrows } from '../../components/carousel';

// ----------------------------------------------------------------------

const RootStyle = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& .slick-list': {
    boxShadow: theme.customShadows.z16,
    borderRadius: 0,
  },
}));

// ----------------------------------------------------------------------

export default function LandingCarousel() {
  const theme = useTheme();
  const carouselRef = useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      rounded: true,
      sx: { mt: 3 },
    }),
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <RootStyle>
      <CarouselArrows
        filled
        onNext={handleNext}
        onPrevious={handlePrevious}
        sx={{
          '& .arrow': {
            '&.left': { left: 16 },
            '&.right': { right: 16 },
          },
        }}
      >
        <Slider ref={carouselRef} {...settings}>
          {[
            "https://gcc-store.s3.amazonaws.com/images/70d13b59-2d6f-4e55-b410-2dbf7916d7e8.jpg",
            "https://gcc-store.s3.amazonaws.com/images/330d76c0-60e8-45cd-8528-3ef5da6a6765.jpg",
            "https://gcc-store.s3.amazonaws.com/images/a58b3f78-f77c-4919-8d3d-86add3023d8f.jpg"
          ].map((item) => (
            <CarouselItem key={item} item={item} />
          ))}
        </Slider>
      </CarouselArrows>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
  }),
};

function CarouselItem({ item }) {

  return <Image alt='GCCM' src={item} ratio="29/11" />;
}
