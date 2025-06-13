import React from 'react';
import { useQuery } from 'react-query';
import { fetchPackages } from '../api/api';
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

const PackageList = () => {
  const { data, isLoading } = useQuery('packages', fetchPackages);

  if (isLoading) {
    return (
      <Grid container spacing={2}>
        {[...Array(6)].map((_, i) => (
          <Grid item key={i}>
            <Skeleton variant="rectangular" width={300} height={350} />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid container spacing={2}>
      {data.map((pkg) => (
        <Grid item key={pkg._id}>
          <Card sx={cardStyle}>
            <CardMedia
              component="img"
              height="180"
              image={pkg.image}
              alt={pkg.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>{pkg.title}</Typography>
              <Typography color="textSecondary">{pkg.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PackageList;
