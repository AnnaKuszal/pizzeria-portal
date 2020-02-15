import React from 'react';
import styles from './Kitchen.module.scss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const demoContent = [
  
  {id: '1', status: 'prepared', order: 123, details: 'Zia Giulia\'s Breakfast'},
  {id: '2', status: 'prepared', order: 234, details: 'Nonna Alba\'s Pizza'},
  {id: '3', status: 'ordered', order: 345, details: 'Nonno Alberto\'s Salad, Nonna Alba\'s Pizza'},
  {id: '4', status: 'ordered', order: 456, details: 'Zia Giulia\'s Breakfast, Nonno Alberto\'s Salad'},
];

const renderActions = status => {
  switch (status) {
    case 'ordered':
      return (
        <Button>prepared</Button>
      );
    case 'prepared':
      return (
        <Button>delivered</Button>
      );
    case 'delivered':
      return (
        <Button>paid</Button>
      );
    default:
      return null;
  }
};


const Kitchen = () => {
  
  return (
    <Paper className={styles.component}>
      <Grid container spacing={4} >
  
        <Grid item xs={12}>
          <Typography variant="h5" component="h2" align="center">Kitchen view</Typography>
        </Grid>
  
        <Grid item xs={12}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order No</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Table Id / Order Id</TableCell>
                <TableCell>Details</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {demoContent.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button>
                        {row.details}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {renderActions(row.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Kitchen;