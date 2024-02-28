import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { m } from 'framer-motion';
import { varFade, MotionViewport } from 'src/components/animate';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';

// ----------------------------------------------------------------------

export default function CarouselOurJobs({ data }) {
  const theme = useTheme();

  const carousel = useCarousel({
    autoplay: true,
    ...CarouselDots({
      rounded: true,
      sx: { mt: 3 },
    }),
  });

  return (
    <Box
      sx={{
        mt: 3,
        position: 'relative',
        '& .slick-list': {
          borderRadius: 2,
          boxShadow: theme.customShadows.z16,
        },
      }}
    >
      <CarouselArrows filled shape="rounded" onNext={carousel.onNext} onPrev={carousel.onPrev}>
        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
          {data.map((item) => (
              <CarouselItem key={item.id} item={item} />
          ))}
        </Carousel>
      </CarouselArrows>
      
    </Box>
  );
}

CarouselOurJobs.propTypes = {
  data: PropTypes.array,
};

// ----------------------------------------------------------------------

function CarouselItem({ item }) {
  const { coverUrl, title } = item;

  return <Image style={{ height: '30rem' }} alt={title} src={coverUrl} ratio="1/1" />;
}

CarouselItem.propTypes = {
  item: PropTypes.object,
};
