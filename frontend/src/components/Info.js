import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Component } from 'react';

const styles = {
    body: {
        overflow : 'hidden',
    },
};

class Info extends Component {
    state = {
        student: []
    };

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/v1/getAllStudent');
        const body = await response.json();
        this.setState({ student: body });
        console.log(this.state)
    }

    render() {
        const { student } = this.state;

        return (
            <div style={styles.body}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell >ID</TableCell>
                                <TableCell  >Name</TableCell>
                                <TableCell >Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {student.map((student) => (
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell>{student.id}</TableCell>
                                    <TableCell>{student.name}</TableCell>
                                    <TableCell>{student.email}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}
export default Info;
