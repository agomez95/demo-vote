import FormCandidate from '../components/FormCandidate'
import { Box, Card, Typography } from '@mui/material'


const styleInputs = {
    backgroundColor: '#214a72',
    padding: 20
}

const Candidates = () => {
    return (
        <Card style={{ maxWidth: "40%", margin: "0 auto" }}>
            <Box sx={{ flexGrow: 1 }} style={styleInputs}>                
                <Typography gutterBottom variant="h3" align="center" margin={0} color='white'>Nuevo Candidato</Typography>
                <br/>
                <FormCandidate sx={{ padding: '32px', margin: '4rem' }} />
            </Box>
        </Card>
    )
}

export default Candidates