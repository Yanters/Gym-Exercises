import React, { useEffect, useState } from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );
      if (!(bodyPartsData.length > 0)) return;
      setBodyParts(['All', ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search && search.length > 0) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );
      const filteredExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      console.log(filteredExercises);
      setSearch('');
      setExercises(filteredExercises);
    }
  };

  return (
    <Stack alignItems='center' mt='40px' justifyContent='center' p='20px'>
      <Typography
        fontWeight='700'
        sx={{
          fontSize: { lg: '44px', xs: '30px' },
        }}
        mb='20px'
        textAlign='center'
      >
        Find yourself a new workout
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search for an exercise'
          sx={{
            width: { lg: '800px', xs: '350px' },
            height: '50px',
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '10px',
              backgroundColor: '#FFF',
            },
          }}
        />
        <Button
          className='search-btn'
          onClick={handleSearch}
          sx={{
            backgroundColor: '#FF2625',
            color: '#FFF',
            textTransform: 'none',
            width: { lg: '200px', xs: '100px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0',
          }}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z'
              fill='currentColor'
            />
          </svg>
          &nbsp;Search
        </Button>
      </Box>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          p: '20px',
        }}
      >
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
