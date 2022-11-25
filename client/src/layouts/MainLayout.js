import { Box, Paper } from '@mui/material'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {   
    return (
        /*<Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: '#41464b',
            }}
        >
            <Navbar></Navbar>
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="0vh"><Outlet/></Box>
            <Footer></Footer>
        </Box>*/
        <Box
            /*sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',   
                flexWrap: 'wrap',                
                backgroundColor: '#41464b',
                '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                },
            }}*/

            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: '#41464b',
              }}
        >
            <Navbar></Navbar>
            <Paper style={{width: '30%'}}>
                <Outlet/>
            </Paper>
            <Footer></Footer>
      </Box>
    )
}   

export default MainLayout;