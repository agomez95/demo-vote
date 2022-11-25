import { Box, Grid, Paper, Container } from '@mui/material'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'



const MainLayout = () => {   

    return (
        <Box style={{height: "100%"}}>
            <Navbar></Navbar>
                <Container style={{ height: '100%', content: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <Paper style={{ width: '50%', borderRadius: '30px'}}>
                        <Grid container alignItems="center" direction="row" style={{ width: '100%', height: '100%' }}>
                            <Outlet/>
                        </Grid>
                    </Paper>
                </Container>
            <Footer></Footer>
        </Box>
    )
}   

export default MainLayout;