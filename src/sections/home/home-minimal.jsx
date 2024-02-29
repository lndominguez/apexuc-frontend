import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { alpha, styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { bgBlur, bgGradient, textGradient } from 'src/theme/css';

import { varFade, MotionViewport } from 'src/components/animate';
import { HEADER } from 'src/layouts/config-layout';
import { Button } from '@mui/material';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: ' /assets/icons/home/ic_make_brand.svg',
    title: 'Branding',
    description: 'Consistent design makes it easy to brand your own.',
  },
  {
    icon: ' /assets/icons/home/ic_design.svg',
    title: 'UI & UX Design',
    description:
      'The kit is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.',
  },
  {
    icon: ' /assets/icons/home/ic_development.svg',
    title: 'Development',
    description: 'Easy to customize and extend, saving you time and money.',
  },
];

const StyledQuienesSomos = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.paper, theme.palette.mode === 'light' ? 0.9 : 0.94),
    // imgUrl: '/assets/background/overlay_3.jpg',
  }),
  width: '100%',
  height: '100vh',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    position: 'fixed',
  },
}));

// ----------------------------------------------------------------------

export default function HomeMinimal() {
  return (
    <>
      <div
        style={{
          backgroundImage: 'url("/assets/background/home_bgQSomos.jpg")',
          backgroundSize: '60rem',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div
          style={{
            height: '30rem',
            background:
              'linear-gradient(120deg, rgba(234,140,25,1) 0%, rgba(241,196,2,1) 18%, rgba(235,149,22,1) 45%, rgba(235,149,22,0.5172269591430323) 75%)',
          }}
        >
          <Container
            component={MotionViewport}
            sx={{
              py: { xs: 10, md: 15 },
            }}
          >
            <Stack
              alignItems="left"
              justifyContent="center"
              sx={{
                height: 1,
                px: 3,
                maxWidth: 480,
                color: 'white',
              }}
            >
              <m.div variants={varFade({ durationIn: 1.5 }).inLeft}>
                <Typography
                  variant="h3"
                  sx={{
                    textAlign: 'left',
                  }}
                >
                  ¿Quiénes Somos?
                </Typography>
              </m.div>

              <m.div variants={varFade({ durationIn: 1.5 }).inRight}>
                <Typography variant="body2" sx={{ textAlign: 'left', maxWidth: 350 }}>
                  The starting point for your next project is based on MUI. Easy customization Helps
                  you build apps faster and better. The starting point for your next project is
                  based on MUI. Easy customization Helps you build apps faster and better. The
                  starting point for your next project is based on MUI.
                </Typography>
              </m.div>
            </Stack>
          </Container>
        </div>
      </div>

      <Container
        component={MotionViewport}
        sx={{
          py: { xs: 10, md: 15 },
        }}
      >
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
              Servicios
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography variant="h3">
              ¿Sabes cuales son <br /> nuestros servicios?
            </Typography>
          </m.div>
        </Stack>
        <Box
          gap={{ xs: 3, lg: 10 }}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          {CARDS.map((card, index) => (
            <m.div variants={varFade().inUp} key={card.title}>
              <Card
                sx={{
                  textAlign: 'center',
                  boxShadow: { md: 'none' },
                  bgcolor: 'background.default',
                  p: (theme) => theme.spacing(10, 5),
                  ...(index === 1 && {
                    boxShadow: (theme) => ({
                      md: `-40px 40px 80px ${
                        theme.palette.mode === 'light'
                          ? alpha(theme.palette.grey[500], 0.16)
                          : alpha(theme.palette.common.black, 0.4)
                      }`,
                    }),
                  }),
                }}
              >
                <Box
                  component="img"
                  src={card.icon}
                  alt={card.title}
                  sx={{ mx: 'auto', width: 48, height: 48 }}
                />

                <Typography variant="h5" sx={{ mt: 8, mb: 2 }}>
                  {card.title}
                </Typography>

                <Typography sx={{ color: 'text.secondary' }}>{card.description}</Typography>
              </Card>
            </m.div>
          ))}
        </Box>
        <m.div variants={varFade({ durationIn: 1.5 }).inRight}>
          <Stack
            spacing={1.5}
            direction={{ xs: 'column-reverse', sm: 'row' }}
            sx={{ mb: 2, mt: 2, display: 'flex', justifyContent: 'center' }}
          >
            <Button
              color="inherit"
              size="large"
              variant="outlined"
              // startIcon={<Iconify icon="eva:external-link-fill" width={24} />}
              target="_blank"
              rel="noopener"
              // href={paths.figma}
              sx={{ borderColor: 'text.primary' }}
            >
              Solicite nuestros servicios
            </Button>
          </Stack>
        </m.div>
      </Container>
    </>
  );
}
