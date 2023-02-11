import { Box, Pagination, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ bodyPart, setExercises, exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginateHandler = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1650, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === 'All') {
        exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

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
        {bodyPart === 'All'
          ? 'All Exercises'
          : bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)}
      </Typography>
      <Stack
        direction='row'
        flexWrap='wrap'
        justifyContent='center'
        sx={{
          gap: { lg: '110px', xs: '50px' },
        }}
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 9 && (
          <Pagination
            color='standard'
            shape='rounded'
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginateHandler}
            size='large'
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
