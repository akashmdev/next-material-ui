import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Button from "@mui/material/Button";
import {Avatar, TextField} from "@mui/material";
import {deepPurple} from "@mui/material/colors";

export default function Index() {
  return (
    <Container  maxWidth={'sm'}>
      <Box sx={{ my: 2 }}>
        <Avatar sx={{ width: 75, height:75,bgcolor: deepPurple[500] }}>AS</Avatar>
          <p>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </p>
        <Link href="/about" color="secondary">
           hhhhhh
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
