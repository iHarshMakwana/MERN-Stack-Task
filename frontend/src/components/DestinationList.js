import React from 'react';
import { useQuery } from 'react-query';
import { fetchDestinations } from '../api/api';
import {
  Grid, Card, CardContent, Typography,
  Skeleton, CardMedia
} from '@mui/material';

const cardStyle = {
  width: 300,
  height: 350,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '12px',
  overflow: 'hidden',
};

const DestinationList = () => {
  const { data, isLoading } = useQuery('destinations', fetchDestinations);

  if (isLoading) {
    return (
      <Grid container spacing={2}>
        {[...Array(6)].map((_, index) => (
          <Grid item key={index}>
            <Skeleton variant="rectangular" width={300} height={350} />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid container spacing={2}>
      {data.map((dest) => (
        <Grid item key={dest._id}>
          <Card sx={cardStyle}>
            <CardMedia
              component="img"
              height="180"
              image={dest.image}
              alt={dest.name}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>{dest.name}</Typography>
              <Typography color="textSecondary">Starting From {dest.price}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DestinationList;
