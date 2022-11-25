import FormVote from '../components/FormVote'
import { Box, Card, Typography } from '@mui/material'


const styleInputs = {
    backgroundColor: '#214a72',
    padding: 20
}

const Votes = () => {
    return (
        <Card style={{ maxWidth: "40%", margin: "0 auto" }}>
            <Box sx={{ flexGrow: 1 }} style={styleInputs}>                
                <Typography gutterBottom variant="h3" align="center" margin={0} color='white'>Votacion UPT</Typography>
                <br/>
                <FormVote sx={{ padding: '32px', margin: '4rem' }} />
            </Box>
        </Card>
    )
}

export default Votes