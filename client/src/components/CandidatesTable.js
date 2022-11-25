import { Table, TableBody,  TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material'
import {connectWallet, getCandidates} from '../ABI/Candidate'
import { useState, useEffect } from 'react'


function CandidatesTable() {

    const [ candidates, setCandidates ] = useState([])

    useEffect(() => {  
        connectWallet().catch(console.error)
        getCandidates().then((res) => setCandidates(res))
    },[ ])

    return (
        <TableContainer component={Paper}>
            <Typography gutterBottom variant="h5" align="center" margin={0}>Lista de Candidatos</Typography>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell><b>#</b></TableCell>
                    <TableCell align="center">N° de Lista</TableCell>
                    <TableCell align="center">Grupo</TableCell>
                    <TableCell align="center">Cant. de Votos</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {candidates.map((candidate,i) => (
                    <TableRow
                        key={i}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">{candidate.identyfier}</TableCell>
                    <TableCell align="center">{candidate.identyfier}</TableCell>
                    <TableCell align="center">{candidate.group}</TableCell>
                    <TableCell align="center">{candidate.voteCount}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CandidatesTable