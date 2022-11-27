import { Grid, TextField, Button, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState, useEffect } from 'react'
import { saveAmphora } from '../ABI/Amphora'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,    
    margin: 0,
}));

function FormAmphora() {

    const [ amphora, setAmphora ] = useState("")
    const [ direction, setDirection ] = useState("")

    useEffect(() => {  
        /*connectWallet().catch(console.error).then(async () => {
            let directionVar = await window.ethereum.request({method: 'eth_requestAccounts'})
            setDirection(directionVar[0])
        })*/
        if (localStorage.getItem("previouslyConnected") === "true") {
            const getDirection = async () => {
                let directionVar = await window.ethereum.request({method: 'eth_requestAccounts'})
                setDirection(directionVar[0])
            }
            getDirection()
        }
    },[ ])

    const handleSubmit = (e) => {
        e.preventDefault()
        saveAmphora(amphora)
    }
    
    const handleAmphora = (e) => {
        setAmphora(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit} autoComplete="off">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>
                        <TextField 
                            placeholder="Ingrese el número de su anfora.." 
                            label="Anfora" 
                            variant="outlined" 
                            required 
                            onChange={handleAmphora} 
                            value={amphora} 
                            type="number" 
                            fullWidth 
                            InputProps={{
                                inputProps: { 
                                    max: 10, min: 1 
                                }
                            }} />
                    </Item>
                    <br/>
                    <Item>
                        <TextField label={direction} variant="outlined" type="text" fullWidth disabled/>
                    </Item>
                    <br/>                    
                    <Button style={{margin: '0 auto', display: "flex"}} variant="contained" type="submit">Registrar</Button>
                </Grid>
            </Grid>
        </form>            
    )
}

export default FormAmphora