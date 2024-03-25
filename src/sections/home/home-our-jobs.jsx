import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { useSettingsContext } from 'src/components/settings';
import { varFade, MotionViewport } from 'src/components/animate';
import { Button, Card, CardContent, CardHeader } from '@mui/material';
import CarouselBasic3 from '../_examples/extra/carousel-view/carousel-basic-3';
import { _mock } from 'src/_mock';
import CarouselOurJobs from '../_examples/extra/carousel-view/carousel-our-jobs';

// ----------------------------------------------------------------------
const jobsList = [
  {
    id: 0,
    title: 'Web Developer',
    description: 'Web Developer in despega express',
    coverUrl: '/assets/images/home/hero/slider/web_dev.jpg',
  },
  {
    id: 1,
    title: 'Mobile Developer',
    description: 'Mobile Developer in ApexUDelivery',
    coverUrl: '/assets/images/home/hero/slider/app_dev.png',
  },
  {
    id: 2,
    title: 'Desktop Developer',
    description: 'Desktop Developer in SysAdmin for ApexUTravel',
    coverUrl: '/assets/images/home/hero/slider/desktop_dev.png',
  },
];
export default function HomeOurJobs() {
  const settings = useSettingsContext();

  const renderDescription = (
    <Stack alignItems="center" spacing={3}>
      <m.div variants={varFade().inUp}>
        <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
          trabajos
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h3" sx={{ color: 'common.white' }}>
          Conoce algunos <br /> de nuestros trabajos
        </Typography>
      </m.div>
    </Stack>
  );
  const _carouselsExample = [...Array(20)].map((_, index) => ({
    id: _mock.id(index),
    title: _mock.postTitle(index),
    coverUrl: _mock.image.cover(index),
    description: _mock.description(index),
  }));

  const renderCarouserl = (
    <m.div variants={varFade().inUp}>
      <CarouselOurJobs data={jobsList} />
    </m.div>
  );

  return (
    <Box
      gap={3}
      display="grid"
     
      sx={{
        textAlign: 'center',
        bgcolor: '#0C3F5B',
        pt: { xs: 10, md: 15 },
        pb: { xs: 10, md: 20 },
      }}
    >
      <Container component={MotionViewport}>
        {renderDescription}
        {renderCarouserl}
      </Container>
    </Box>
  );
}
