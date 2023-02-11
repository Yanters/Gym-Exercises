import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const Exercises = ({ bodyPart, setExercises, exercises }) => {
  console.log(exercises);

  return (
    <Box
      id='exercises'
      sx={{
        mt: { lg: '110px' },
      }}
      mt='50px'
      p='20px'
    >
      <Typography variant='h4' mb='46px'>
        {bodyPart === 'All' ? 'All Exercises' : bodyPart}
      </Typography>
      <Stack
        direction='row'
        flexWrap='wrap'
        justifyContent='center'
        sx={{
          gap: { lg: '110px', xs: '50px' },
        }}
      >
        {exercises.map((exercise, index) => (
          <p>{exercise.name}</p>
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
