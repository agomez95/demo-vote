import React from 'react';
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
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
                Bienvenido
            </Typography>
            <Typography variant="h6" style={{ color: 'white' }}>
                Ingresa aquí para votar
            </Typography>
            <Button onClick={() => navigate('/votes')} variant="contained">Entrar</Button>
        </Box>
    )
}

export default Home