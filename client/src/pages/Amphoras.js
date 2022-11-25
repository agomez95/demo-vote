import FormAmphora from '../components/FormAmphora'
import { Box, Card, Grid, Typography } from '@mui/material'


const styleInputs = {
    backgroundColor: '#214a72',
    padding: 20
}

const Amphoras = () => {
    return (
        <Card style={{ maxWidth: "100%", margin: "0 auto" }}>
            <Box sx={{ flexGrow: 1 }} style={styleInputs}>                
                <Typography gutterBottom variant="h3" align="center" margin={0} color='white'>Nueva Anfora</Typography>
                <br/>
                <FormAmphora sx={{ padding: '32px', margin: '4rem' }} />
            </Box>
        </Card>
    )
}

export default Amphoras