import { Stack, AppBar, Toolbar, IconButton, Typography, Button, Chip } from '@mui/material'
import BallotIcon from '@mui/icons-material/Ballot'
import { useWeb3React } from "@web3-react/core"
import { injected } from '../config/web3'
import { useCallback, useEffect, useState } from "react"
import Web3 from 'web3'
import { useNavigate } from "react-router-dom"

function Navbar() {

    const web3 = new Web3(window.ethereum)
    const [ balance, setBalance ] = useState(0)
    const { active, activate, deactivate, account } = useWeb3React()
    const navigate = useNavigate()

    const connect = useCallback(() => {
        activate(injected)
        localStorage.setItem("previouslyConnected", "true")
        navigate("/votes")
      }, [activate, navigate])

    const disconnect = () => {
        deactivate()
        localStorage.removeItem("previouslyConnected")
        navigate("/")
    }

    const getBalance = useCallback( async () => {
        const toSet = await web3.eth.getBalance(account)
        setBalance((toSet / 1e18).toFixed(3))
    }, [web3.eth, account])

    useEffect(() => {
        if (active) getBalance()
    }, [active, getBalance])

    useEffect(() => {
        if (localStorage.getItem("previouslyConnected") === "true") connect()
    }, [connect])

    return(
        <AppBar position='static' style={{ backgroundColor: '#214a72' }} sx={{position: 'fixed'}}>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <BallotIcon></BallotIcon>
                </IconButton>
                <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>Votaciones UPT</Typography>
                <Stack direction='row' spacing={2}>
                    {active ? (
                        <Chip label={'Direccion: ' + account.slice(0, 4) + '...' + account.slice(-4) + '~' + balance + 'Ξ'} variant="outlined" onClick={disconnect} style={{color: 'white'}}></Chip>                     
                    ) : (
                        <Button onClick={connect} color='inherit'>Conectarse</Button>
                    )}                    
                </Stack>
            </Toolbar>
        </AppBar>
    )
} 

export default Navbar
