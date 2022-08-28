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
            "https://cubeqbusiness.com/wp-content/uploads/2021/10/Graphic-designer.jpg",
            "https://marketsplash.com/content/images/2021/03/Brand-Marketing-1.png",
            "https://www.bennettgraphics.com/bennettgraphicswordpress/wp-content/uploads/2015/06/bennett-graphics-31.jpg"
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
