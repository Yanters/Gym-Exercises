import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';

const SimilarExercises = ({ similarExercises, similarEquipment }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography>Exercises that target the same muscle group:</Typography>
      <Stack
        direction='row'
        sx={{
          p: '2px',
          position: 'relative',
        }}
      >
        {similarExercises.length > 0 && <HorizontalScrollbar data={similarExercises} />}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
