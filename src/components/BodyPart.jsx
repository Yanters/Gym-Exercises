import { Stack, Typography } from '@mui/material';
import React from 'react';

import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? '3px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '10px',
        width: '270px',
        height: '270px',
        cursor: 'pointer',
        gap: '50px',
      }}
      onClick={() => {setBodyPart(item);
        window.scrollTo({
          top: 1650,
          left: 100,
          behavior: 'smooth',
        });
      }}
    >
      <img
        src={Icon}
        alt='dumbbell'
        style={{ width: '40px', height: '40px' }}
      />
      <Typography
        fontSize='24px'
        fontWeight='bold'
        color='#3A1212'
        textTransform='capitalize'
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
