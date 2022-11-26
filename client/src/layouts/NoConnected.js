import { Grid, Container, Paper, Typography } from '@mui/material'
import ErrorIcon from '@mui/icons-material/Error';

const NotConnected = () => {
    return (
        <Container>
            <Paper>
                <Grid style={{height: "15vh"}} container alignItems="center" direction="row">
                    <Grid item container direction="column" justify="center" alignItems="center" xs={12}>
                        <ErrorIcon style={{fontSize: '50px'}}/>
                        <Typography variant="subtitle2" style={{ fontSize: '20px' }}>Error: Ingrese a su wallet por favor</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default NotConnected