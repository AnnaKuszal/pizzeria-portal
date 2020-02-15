import 'date-fns';
import React, { useState } from 'react';
import {Link}  from 'react-router-dom';
import styles from './Homepage.module.scss';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const orderStats = [
  {id: 1, value: 34, type: 'local'},
  {id: 2, value: 56, type: 'local'},
  {id: 3, value: 67, type: 'online'},
  {id: 4, value: 76, type: 'online'},
];

const bookings = [
  {id: 1, hour: '18:00', tableId: 1, ppl: 2},
  {id: 2, hour: '19:15', tableId: 3, ppl: 6},
  {id: 3, hour: '19:30', tableId: 5, ppl: 4},
  {id: 4, hour: '20:00', tableId: 2, ppl: 2},
  {id: 5, hour: '18:00', tableId: 7, ppl: 2},
  {id: 6, hour: '20:00', tableId: 4, ppl: 8},
];

const events = [
  {id: 1, hour: '16:00', tableId: 4, ppl: 12},
  {id: 2, hour: '14:00', tableId: 2, ppl: 6},
];

const Homepage = () => {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Paper className={styles.component}>
      <Grid container spacing={4} >

        <Grid item xs={12}>
          <Typography variant="h5" component="h2" align="center">Dashboard</Typography>
        </Grid>

        <Grid item xs={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
    
            <Grid container justify="center">
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>

        <Divider />

        <Grid item xs={12}>
          <Typography>
            Stats
          </Typography>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Daily order No</TableCell>
                <TableCell>Order ID</TableCell>
                <TableCell>Order type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderStats.map(row => (
                <TableRow key={row.id}>
                  <TableCell>
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.value}
                  </TableCell>
                  <TableCell>
                    {row.type}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>

        <Divider />

        <Grid item xs={12}>

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>BOOKINGS</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Booking ID</TableCell>
                    <TableCell>Hours (from)</TableCell>
                    <TableCell>Table ID</TableCell>
                    <TableCell>Guests</TableCell>
                    <TableCell>Details</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bookings.map(row => (
                    <TableRow key={row.id}>
                      <TableCell>
                        {row.id}
                      </TableCell>
                      <TableCell>
                        {row.hour}
                      </TableCell>
                      <TableCell>
                        {row.tableId}
                      </TableCell>
                      <TableCell>
                        {row.ppl}
                      </TableCell>
                      <TableCell>
                        <Link to={`${process.env.PUBLIC_URL}/`}>Show more</Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>EVENTS</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Booking ID</TableCell>
                    <TableCell>Hours (from)</TableCell>
                    <TableCell>Table ID</TableCell>
                    <TableCell>Guests</TableCell>
                    <TableCell>Details</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {events.map(row => (
                    <TableRow key={row.id}>
                      <TableCell>
                        {row.id}
                      </TableCell>
                      <TableCell>
                        {row.hour}
                      </TableCell>
                      <TableCell>
                        {row.tableId}
                      </TableCell>
                      <TableCell>
                        {row.ppl}
                      </TableCell>
                      <TableCell>
                        <Link to={`${process.env.PUBLIC_URL}/`}>Show more</Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ExpansionPanelDetails>
          </ExpansionPanel>

        </Grid>
      </Grid>
    </Paper>
  );
  
};

export default Homepage;