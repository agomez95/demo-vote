import { Table, TableBody,  TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material'
import { connectWallet, getVotes } from '../ABI/Vote'
import { useState, useEffect } from 'react'


function VotesTable() {

    const [ votes, setVotes ] = useState([])

    useEffect(() => {  
        connectWallet().catch(console.error)
        getVotes().then((res) => setVotes(res))
    },[ ])

    return (
        <TableContainer component={Paper}>
            <Typography gutterBottom variant="h5" align="center" margin={0}>Votos Validos</Typography>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="center">N° de Voto</TableCell>
                    <TableCell align="center">Codigo</TableCell>
                    <TableCell align="center">Dirección de Anfora</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {votes.map((vote,i) => (
                    <TableRow
                        key={i}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell align="center">{vote.counter}</TableCell>
                    <TableCell align="center">{vote.code}</TableCell>
                    <TableCell align="center">{vote.addr}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default VotesTable