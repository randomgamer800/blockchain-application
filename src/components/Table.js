//mainly to table to display student's results to teachers and also contains functions from other components in the teachers' view section
import React from 'react';
import { useForm } from 'react-hook-form'; //library to handle form submissions
import Table from '@mui/material/Table'; //mui allows for easy implementation of responsive table
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
import Resetteacher from './Resetteacher';

function createData(name, q1, q2, q3, total) {
  return { name, q1, q2, q3, total }; //headings but these are also used later on for looping 
}

const rows = [
  createData('Student A', 1, 0, 0, 1),
  createData('Student B', 1, 0, 1, 2),
  createData('Student C', 1, 1, 1, 3),
]; //static data

export default function DenseTable() {
  const { upload, handleupload } = useForm()
  return (
    <Paper style={{ background: '#ff7f50', minHeight: '100vh'}}> {/*paper element is used to colour the background*/}
    <Box paddingTop='100px' paddingRight='20px' paddingLeft='20px'>
      <Typography variant='h3'>Student results</Typography>
      <TableContainer component={Paper}> {/*characteristics of the table as stated in mui documentation*/}
      <Table sx={{minWidth: 550}} aria-label="simple table">{/*used for spaces between rows, might change and only applicable on mobile view*/}
        <TableHead>
          <TableRow>
            <TableCell>EE Exam</TableCell>
            <TableCell align="center">Question 1</TableCell>
            <TableCell align="center">Question 2</TableCell>
            <TableCell align="center">Question 3</TableCell>
            <TableCell align="center">Total Marks</TableCell> {/*manual assignment of row heading*/}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            > {/*manual assignment of row heading*/}
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.q1}</TableCell>
              <TableCell align="center">{row.q2}</TableCell>
              <TableCell align="center">{row.q3}</TableCell>
              <TableCell align="center">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Stack paddingTop='30px' spacing={3} direction="column" justifyContent="center" alignItems="center">
      <Typography variant='h3'>Post a Question</Typography> {/*handling uploading of files to the website (only frontend)*/}
      <Typography variant='h4'>Method 1 : Upload a file</Typography> {/*users can choose to submit mutliple questions(file) or one question at a time*/}
      <Input ref={upload} type='file' name='document'></Input> {/*should be able to handle any file type*/}
      <Button variant="contained" startIcon={<CloudUploadIcon />}>
        Upload
      </Button>
      <Postquestion/> {/*refer to Postquestion.js*/}
      <Resetteacher/> {/*refer to Resetteacher.js*/}
    </Stack>
    </Box>
    </Paper>
  );
}