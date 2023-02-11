import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt='100px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='20px'>
        <img src={Logo} alt='logo' width='200px' height='40px' />
        <Typography variant='h5' color='#000' mt='20px' pb='40px'>
          © 2023 - All rights reserved by Konrad Nowicki
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
