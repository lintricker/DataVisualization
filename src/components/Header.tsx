import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';

function Header() {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{margin: "10px", padding: "8px"}}>      
      <Typography sx={{ color: 'text.primary' }}>Главная</Typography>
  </Breadcrumbs>
  );
}

export default Header;