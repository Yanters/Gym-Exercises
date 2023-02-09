import React from 'react'
import Excercises from '../components/Excercises'
import HeroBanner from '../components/HeroBanner'
import SearchExcercises from '../components/SearchExcercises'
import { Box } from '@mui/material'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExcercises />
      <Excercises />
    </Box>
  )
}

export default Home