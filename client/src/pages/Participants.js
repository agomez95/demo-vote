import VotesTable from '../components/VotesTable'
import { Box, Card } from '@mui/material'

const Participants = () => {
    return (
        <Card style={{ margin: "0 auto", width: '100%' }}>
            <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: '#214a72', padding: 20 }}>
                <VotesTable sx={{ padding: '32px', margin: '4rem' }} />
            </Box>
        </Card>
    )
}

export default Participants