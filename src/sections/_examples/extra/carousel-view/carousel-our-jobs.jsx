import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { m } from 'framer-motion';
import { varFade, MotionViewport } from 'src/components/animate';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';
import { Button, Stack } from '@mui/material';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

export default function CarouselOurJobs({ data }) {
  const [currentSliderJob, setCurrentSliderJob] = useState(0);
  const theme = useTheme();

  const carousel = useCarousel({
    autoplay: true,
    ...CarouselDots({
      rounded: true,
      sx: { mt: 2 },
    }),
  });

  useEffect(() => {
    setCurrentSliderJob(carousel.currentIndex);
  }, [carousel]);

  return (
    <Box
      sx={{
        mt: 2,
        position: 'relative',
        // pt: '12rem',
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
      {data &&
        data
          .filter((job) => job.id === currentSliderJob)
          .map((job) => {
            return (
              <m.div>
                <Typography variant="h4" sx={{ color: 'common.white' }}>
                  {job.title}
                </Typography>
                <Typography variant="demo1" sx={{ color: 'common.white' }}>
                  {job.description}
                </Typography>
                <m.div>
                  <Stack
                    spacing={1.5}
                    direction={{ xs: 'column-reverse', sm: 'row' }}
                    sx={{ mb: 2, mt: 2, display: 'flex', justifyContent: 'center' }}
                  >
                    <Button
                      color="primary"
                      size="large"
                      variant="outlined"
                      // startIcon={<Iconify icon="eva:external-link-fill" width={24} />}
                      target="_blank"
                      rel="noopener"
                      // href={paths.figma}
                      sx={{ borderColor: 'text.white' }}
                    >
                      Solicite {job.title}
                    </Button>
                  </Stack>
                </m.div>
              </m.div>
            );
          })}
    </Box>
  );
}

CarouselOurJobs.propTypes = {
  data: PropTypes.array,
};

// ----------------------------------------------------------------------

function CarouselItem({ item }) {
  const { coverUrl, title } = item;

  return (
    <Image
      style={{
        // width: '50%',
        // margin: '10px',
        height: '30rem',
        boxShadow: '-3px 0px 100px -8px rgba(0,0,0,0.67)',
      }}
      alt={title}
      src={coverUrl}
      ratio="1/1"
    />
  );
}

CarouselItem.propTypes = {
  item: PropTypes.object,
};
