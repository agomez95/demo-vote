import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom"

export default function NotFound() {

  let navigate = useNavigate()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#41464b',
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        La pagina que busca no existe.
      </Typography>
      <Button variant="contained" onClick={navigate(`/votes`)}>Volver</Button>
    </Box>
  );
}