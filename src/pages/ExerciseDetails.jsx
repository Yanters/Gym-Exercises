import React, { useEffect, useState } from 'react';
import Detail from '../components/Detail';
import ExcersiseVideo from '../components/ExcersiseVideo';
import SimilarExercises from '../components/SimilarExercises';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { exerciseOptions, fetchData, videoOptions } from '../utils/fetchData';

const ExcersiseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState({});
  const [similarExercises, setSimilarExercises] = useState([]);
  const [similarEquipment, setSimilarEquipment] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseDetail = async () => {
      const exerciseDetailurl = `https://exercisedb.p.rapidapi.com`;
      const exerciseVideoUrl = `https://youtube-search-and-download.p.rapidapi.com`;

      const exerciseDetailData = await fetchData(
        `${exerciseDetailurl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(
        `${exerciseVideoUrl}/search?query=${exerciseDetailData.name}`,
        videoOptions
      );
      setExerciseVideo(exerciseVideoData.contents);

      const similarExercisesData = await fetchData(
        `${exerciseDetailurl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setSimilarExercises(similarExercisesData);

      const similarEquipmentData = await fetchData(
        `${exerciseDetailurl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setSimilarEquipment(similarEquipmentData);
    };
    fetchExerciseDetail();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExcersiseVideo
        exerciseVideo={exerciseVideo}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        similarExercises={similarExercises}
        similarEquipment={similarEquipment}
      />
    </Box>
  );
};

export default ExcersiseDetails;
