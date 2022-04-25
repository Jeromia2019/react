import React from 'react';
import { Typography } from '@mui/material';

const TitlePage = ({ content }) => (
  <Typography 
  component='h2' 
  variant='h4'
  marginTop={2}
  >
    {content}
  </Typography>
);

export default TitlePage;
