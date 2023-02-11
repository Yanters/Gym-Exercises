import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const ExcersiseVideo = ({ exerciseVideo, name }) => {
  if (!(exerciseVideo.length > 0)) return null;
  return (
    <Box
      sx={{
        marginTop: { lg: '200px', xs: '50px' },
      }}
      p='20px'
    >
      <Typography variant='h4' mb='46px'>
        Watch{' '}
        <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>
          {name}
        </span>{' '}
        exercise video
      </Typography>
      <Stack
        justifyContent='flex-start'
        alignItems='center'
        flexWrap='wrap'
        sx={{
          flexDirection: { lg: 'row', xs: 'column' },
          gap: { lg: '110px', xs: '0px' },
        }}
      >
        {exerciseVideo?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              loading='lazy'
              style={{
                borderRadius: '10px',
              }}
            />
            <Box>
              <Typography variant='h6'>{item.video.title}</Typography>
              <Typography variant='body2'>{item.video.channelName}</Typography>
              <Typography variant='body2'>
                {item.video.viewCountText}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExcersiseVideo;
