import React from 'react';
import { Container, Typography, Divider } from '@mui/material';
import DestinationList from '../components/DestinationList';
import PackageList from '../components/PackageList';

const HomePage = () => {
  return (
    <Container sx={{ paddingY: 4 }}>
      <Typography variant="h4" gutterBottom>
        Explore Most Popular Destinations
      </Typography>
      <DestinationList />

      <Divider sx={{ my: 4 }} />

      <Typography variant="h4" gutterBottom>
        Top Selling Tour Packages of India
      </Typography>
      <PackageList />
    </Container>
  );
};

export default HomePage;
