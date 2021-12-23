import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import TextField from '@mui/material/TextField';
import {Avatar, FormControlLabel, Radio, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {deepOrange} from "@mui/material/colors";
import Button from "@mui/material/Button";





export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <h1>
          <center>
              My portfolio
            </center >
        </h1>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>KR</Avatar>
        <p>
          <TextField id="filled-basic" label="Name" variant="filled" />

        </p>
        <TextField id="filled-basic" label="Gender" variant="filled" />
        <p>
            <Button variant="contained">Age</Button>
        </p>
        <h2>
          Education
        </h2>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Course</TableCell>
              <TableCell align="right">Board/University</TableCell>
              <TableCell align="right">School/College</TableCell>
              <TableCell align="right">Year of passing</TableCell>
              <TableCell align="right">Percentage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

                <TableRow

                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
B.Tech
                  </TableCell>
                  <TableCell align="right">B.Tech</TableCell>
                  <TableCell align="right">KIIT</TableCell>
                  <TableCell align="right">2023</TableCell>
                  <TableCell align="right">100</TableCell>
                </TableRow>

          </TableBody>
        </Table>

        <Typography variant="h4" component="h1" gutterBottom>

        </Typography>
        <Link href="/about" color="secondary">

        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
