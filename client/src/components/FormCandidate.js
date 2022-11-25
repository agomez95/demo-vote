import { Grid, TextField, Button, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState, useEffect } from 'react'
import {connectWallet, saveCandidate} from '../ABI/Candidate'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,    
    margin: 0,
}));

function FormCandidates() {

    const [ group, setGroup ] = useState("")

    useEffect(() => {  
        connectWallet().catch(console.error)
    },[ ])

    const handleSubmit = (e) => {
        e.preventDefault()
        saveCandidate(group)
    }
    
    const handleCandidate = (e) => {
        setGroup(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit} autoComplete="off">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>
                        <TextField placeholder="Ingrese el nombre del grupo.." label="Candidato" variant="outlined" required onChange={handleCandidate} value={group} type="text" fullWidth />
                    </Item>
                    <br/>
                    <Button style={{margin: '0 auto', display: "flex"}} variant="contained" type="submit">Registrar</Button>
                </Grid>
            </Grid>
        </form>             
    )
}

export default FormCandidates