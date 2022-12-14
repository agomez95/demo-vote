import { Grid,  TextField, Button, Paper, Select, MenuItem } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState, useEffect } from 'react'
import { saveVote } from '../ABI/Vote'
import { getCandidates } from '../ABI/Candidate'
import { validateAmphora } from '../ABI/Amphora'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,    
    margin: 0,
}));


function FormVote() {

    const [ studentCode, setCode ] = useState("")
    const [ groupSelected, setGroup ] = useState("")
    const [ candidates, setCandidates ] = useState([])
    const [ amphoraValid, setValid ] = useState(false)


    /*const { active, activate, account } = useWeb3React()
    const [ state, setState ] = useState(false)

    const connect = useCallback(() => {
        activate(injected)
        localStorage.setItem("previouslyConnected", "true")
    }, [activate])

    useEffect(() => {
        if (localStorage.getItem("previouslyConnected") === "true") connect()
    }, [connect])*/

    useEffect(() => {  
        //connectWallet().catch(console.error)
        if (localStorage.getItem("previouslyConnected") === "true") getCandidates().then((res) => setCandidates(res))
    },[ ])

    const verifyCode = (studentCode) => {
        let state = false

        let strFirstThree = studentCode.substring(0,4);
        let strLastSix = studentCode.substring(4,10);
        let year = new Date().getFullYear();

        if(Number(strFirstThree) <= year && Number(strFirstThree) >= 2000){
            if(strLastSix.length === 6) state = true
        }

        return state
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let accountSend = await window.ethereum.request({method: 'eth_requestAccounts'})
        if(verifyCode(studentCode)) {
            validateAmphora(accountSend[0])
                .then((res) => {setValid(res)})
                .catch(() => console.error('salio mal'))
            if(amphoraValid){
                saveVote(groupSelected, studentCode)
            } else {
                alert('Anfora no valida')
                setGroup('')
                setCode('')
            }
        } else {
            alert('Codigo Incorrecto')
            setGroup('')
            setCode('')
        }        
    }
    
    const handleCodeChanged = (e) => {
        setCode(e.target.value)
    }
    
    const handleGroupChanged = (e) => {
        setGroup(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit} autoComplete="off">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <br/>
                    <Item>
                        <TextField 
                            placeholder="Ingrese su c??digo" 
                            label="C??digo" 
                            variant="outlined" 
                            required onChange={handleCodeChanged} 
                            value={studentCode} 
                            type="number" 
                            fullWidth 
                            InputProps={{
                                inputProps: { 
                                    max: 3000000000, min: 10 
                                }
                            }}
                        />
                    </Item>
                    <br/>
                    <Item>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Candidatos"
                            required
                            fullWidth
                            placeholder="Elija"              
                            value={groupSelected}
                            onChange={handleGroupChanged}          
                        >
                            {candidates.map((candidate,i) => {
                                return(
                                    <MenuItem key={i} value={candidate.identyfier}>{candidate.group}</MenuItem>
                                )
                            })}
                        </Select>
                    </Item>
                    <br/>
                    <Button style={{margin: '0 auto', display: "flex"}} variant="contained" type="submit">Votar</Button>
                </Grid>
            </Grid>
        </form>           
    )
}

export default FormVote