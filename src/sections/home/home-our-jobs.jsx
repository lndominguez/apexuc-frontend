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
      <CarouselOurJobs data={_carouselsExample.slice(8, 12)} />
      <m.div variants={varFade().inUp}>
        <Typography variant="h4" sx={{ color: 'common.white' }}>
          Nombre del trabajo
        </Typography>
        <Typography variant="demo1" sx={{ color: 'common.white' }}>
          ApexUCODE lo mejor para tu negocio, lo mejor para tu familia, lo mejor para tus sueños
        </Typography>
        <m.div variants={varFade({ durationIn: 1.5 }).inRight}>
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
              Solicite nuestros servicios
            </Button>
          </Stack>
        </m.div>
      </m.div>
    </m.div>
  );

  return (
    <Box
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
