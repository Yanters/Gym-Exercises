import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ similarExercises, similarEquipment }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography variant='h4' mb='40px'>
        Exercises that target the same muscle group:
      </Typography>
      <Stack
        direction='row'
        sx={{
          p: '2px',
          position: 'relative',
        }}
        mb='40px'
      >
        {similarExercises.length > 0 ? (
          <HorizontalScrollbar data={similarExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant='h4' mb='40px'>
        Exercises that use the same equipment:
      </Typography>
      <Stack
        direction='row'
        sx={{
          p: '2px',
          position: 'relative',
        }}
        mb='40px'
      >
        {similarEquipment.length > 0 ? (
          <HorizontalScrollbar data={similarEquipment} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
