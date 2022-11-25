import FormAmphora from '../components/FormAmphora'
import { Box, Card, Typography } from '@mui/material'

const Amphoras = () => {
    return (
        <Card style={{ margin: "0 auto", width: '100%' }}>
            <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: '#214a72', padding: 20 }}>                
                <Typography gutterBottom variant="h3" align="center" margin={0} color='white'>Nueva Anfora</Typography>
                <br/>
                <FormAmphora sx={{ padding: '32px', margin: '4rem' }} />
            </Box>
        </Card>
    )
}

export default Amphoras