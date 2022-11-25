import {Container,Box,Typography, Paper} from '@mui/material'


const Footer = () => {
  return (
    <Paper 
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#214a72',
        color: 'white'
      }} 
      component="footer" 
      square variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              my:1
            }}
        >
        </Box>
        <Box
          sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              mb: 2,
            }}
        >
          <Typography variant='h5' component='div' sx={{ flexGrow: 1 }} align="center">Votaciones &reg; {new Date().getFullYear()}</Typography>
        </Box>
      </Container>
    </Paper>
  )
}

export default Footer