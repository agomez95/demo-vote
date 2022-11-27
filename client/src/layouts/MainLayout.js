import { Box, Grid, Paper, Container } from '@mui/material'
import Navbar from './Navbar'
import Footer from './Footer'
import NotConnected from './NoConnected'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

const MainLayout = () => {   

    const [ state, setState ] = useState(false)

    useEffect(() => {  
        //connectWallet().catch(console.error)
        if (localStorage.getItem("previouslyConnected") === "true") setState(true)
    },[ ])

    return (
        <Box style={{height: "100%"}}>
            <Navbar></Navbar>
                {state ? (
                <Container style={{ height: '100%', content: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <Paper style={{ width: '50%', borderRadius: '30px'}}>
                        <Grid container alignItems="center" direction="row" style={{ width: '100%', height: '100%' }}>
                            <Outlet/>
                        </Grid>
                    </Paper>
                </Container>                            
                ) : (
                <NotConnected></NotConnected>
                )}                
            <Footer></Footer>
        </Box>
    )
}   

export default MainLayout;