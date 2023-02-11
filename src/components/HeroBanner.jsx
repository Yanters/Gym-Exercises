import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import HeroBannerImg from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' },
      }}
      position='relative'
      p='20px'
    >
      <Typography color='#FF2625' fontSize='26px' fontWeight='600'>
        Gym Buddies Club
      </Typography>
      <Typography
        fontWeight='700'
        sx={{
          fontSize: { lg: '44px', sm: '40px' },
        }}
        mb='20px'
        mt='20px'
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb='20px'>
        Check out our excersises
      </Typography>
      <Button
        variant='contained'
        color='error'
        href='#excersises'
        sx={{
          backgroundColor: '#FF2625',
          borderRadius: '10px',
          fontSize: '18px',
          fontWeight: '300',
          padding: '10px 20px',
        }}
      >
        Get Started
      </Button>
      <Typography
        fontWeight='600'
        color='#FF2625'
        sx={{
          opacity: '0.1',
          display: { xs: 'none', lg: 'block' },
        }}
        fontSize='200px'
      >
        Exercise
      </Typography>
      <img src={HeroBannerImg} alt='Hero Banner' className='hero-banner-img' />
    </Box>
  );
};

export default HeroBanner;
