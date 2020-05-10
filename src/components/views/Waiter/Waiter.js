import React from 'react';
import styles from './Waiter.module.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


class Waiter extends React.Component {

  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    tables: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    changeStatus: PropTypes.func,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(id, status){
    const { changeStatus } = this.props;
    switch (status) {
      case 'free':
        return (//<Button variant="contained" color="primary">new order</Button>
          <>
            <Button variant="contained" color="primary" onClick={() => changeStatus({ id, status: 'thinking' })}>thinking</Button>
            <Fab color="primary" aria-label="add" variant="extended" size="small" component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>
              <AddIcon /> NEW ORDER
            </Fab>
          </>
        );
      case 'thinking':
        return (
          <Button variant="contained" color="primary">new order</Button>
        );
      case 'ordered':
        return (
          <Button variant="contained" color="primary" onClick={() => changeStatus({ id, status: 'prepared' })}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button variant="contained" color="primary" onClick={() => changeStatus({ id, status: 'delivered' })}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button variant="contained" color="primary" onClick={() => changeStatus({ id, status: 'paid' })}>paid</Button>
        );
      case 'paid':
        return (
          <Button variant="contained" color="primary" onClick={() => changeStatus({ id, status: 'free' })}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;
    console.log('tables', tables);

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {

      return (
        <Paper className={styles.component}>
          <Grid container spacing={4} >

            <Grid item xs={12}>
              <Typography variant="h5" component="h2" align="center">Waiter view</Typography>
            </Grid>

            <Grid item xs={12}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Table</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Order</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tables.map(row => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell>
                        {row.status}
                      </TableCell>
                      <TableCell>
                        {row.order && (
                          <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                            {row.order}
                          </Button>
                        )}
                      </TableCell>
                      <TableCell>
                        {this.renderActions(row.id, row.status)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </Paper>
      );
    }
  }
}

export default Waiter;