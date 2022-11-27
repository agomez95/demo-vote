import CandidatesTable from '../components/CandidatesTable'
import { Box, Card } from '@mui/material'

const Results = () => {
    return (
        <Card style={{ margin: "0 auto", width: '200%' }}>
            <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: '#214a72', padding: 20 }}>
                <CandidatesTable sx={{ padding: '32px', margin: '4rem' }} />
            </Box>
        </Card>
    )
}

export default Results