import React from 'react';
import { Box, Typography } from '@mui/material';

export default function NotConnected() {
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
            <Typography variant="h3" style={{ color: 'white', textAlign: 'center' }}>
                No hay conexion con Metamask
            </Typography>
            <Typography variant="h6" style={{ color: 'white' }}>
                Por favor conectese a su wallet desde la opción "Conectarse" en el menu superior
            </Typography>
        </Box>
    )
}