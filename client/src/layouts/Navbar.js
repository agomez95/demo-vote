import { Stack, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'
import BallotIcon from '@mui/icons-material/Ballot'

function Navbar() {
    /**
     * #214a72
     */
    return(
        <AppBar position='static' style={{backgroundColor: '#214a72'}} sx={{position: 'fixed'}}>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <BallotIcon></BallotIcon>
                </IconButton>
                <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>Votaciones UPT</Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Conectarse</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
} 

export default Navbar