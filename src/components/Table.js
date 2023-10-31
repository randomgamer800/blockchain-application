//table to display student's results to teachers
import React from 'react';
import { useForm } from 'react-hook-form'; //library to handle form submissions
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Stack from '@mui/material/Stack';
import { Input, Typography } from '@mui/material';
import Postquestion from './Postquestion';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Student A', 1, 0, 0, 1),
  createData('Student B', 1, 0, 1, 2),
  createData('Student C', 1, 1, 1, 3),
];

export default function DenseTable() {
  const { upload, handleupload } = useForm()
  return (
    <Paper style={{ background: '#ff7f50', minHeight: '100vh'}}> {/*paper element is used to colour the background*/}
    <Box paddingTop='100px' paddingRight='20px' paddingLeft='20px'>
      <Typography variant='h3'>Student results</Typography>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>EE Exam</TableCell>
            <TableCell align="right">Question 1</TableCell>
            <TableCell align="right">Question 2</TableCell>
            <TableCell align="right">Question 3</TableCell>
            <TableCell align="right">Total Marks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Stack paddingTop='30px' spacing={3} direction="column" justifyContent="center" alignItems="center">
    <Typography variant='h3'>Post a Question</Typography>
    <Typography variant='h4'>Method 1 : Upload a file</Typography>
      <Input ref={upload} type='file' name='document'></Input>
      <Button variant="contained" startIcon={<CloudUploadIcon />}>
        Upload
      </Button>
        <Postquestion/>
    </Stack>
    </Box>
    </Paper>
  );
}