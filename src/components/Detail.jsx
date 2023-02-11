import React from 'react';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import { Button, Stack, Typography } from '@mui/material';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap='60px'
      sx={{
        flexDirection: { lg: 'row' },
        p: '20px',
        alignItems: 'center',
      }}
    >
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack
        sx={{
          gap: { lg: '35px', xs: '20px' },
        }}
      >
        <Typography variant='h4'>
          {name?.charAt(0).toUpperCase() + name?.slice(1)}
        </Typography>
        <Typography variant='h6'>
          Exercise {name} is an effective exercise that targets the {bodyPart}.
          This exercise is designed to help improve strength, stability, and
          flexibility in the targeted area. To perform this exercise, simply
          follow these steps below. This exercise can be easily adjusted to
          accommodate different fitness levels.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction='row' gap='20px' alignItems='center'>
            <Button
              sx={{
                background: '#fff2db',
                borderRadius: '50%',
                width: '100px',
                height: '100px',
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{
                  width: '50px',
                  height: '50px',
                }}
              />
            </Button>
            <Typography variant='h5' textTransform='capitalize'>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
