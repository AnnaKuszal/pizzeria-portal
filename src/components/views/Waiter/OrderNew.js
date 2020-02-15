import React from 'react';  //, { useState }
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const demoProducts = [
  {id: 'cake', name: 'Zio Stefano\'s Doughnut', price: 9, 
    options: {choice: {label: 'Yes'}},
  },
  {
    id: 'breakfast',
    name: 'Zia Giulia\'s Breakfast',
    price: 9,
    options: {choice: {label: 'Yes'}},
  },
  {id: 'coffee', label: 'Coffee type', name: 'Coffee', type: 'radios',
    options: {
      latte: {label: 'Latte', price: 1},
      cappuccino: {label: 'Cappuccino', price: 1},
      espresso: {label: 'Espresso', price: 1},
    },
  },
  { 
    id: 'pizza', 
    name: 'Nonna Alba\'s Pizza',
    price: 20,
    type: 'checkboxes',
    options: {
      olives: {
        label: 'Olives', 
        price: 2, 
        default: true,
      },
      redPeppers: {
        label: 'RedPeppers',
        price: 2,
        default: true,
      },
      mushrooms: {
        label: 'Mushrooms',
        price: 2,
        default: true,
      },
    },
  },
  
  {
    id: 'salad',
    name: 'Nonno Alberto\'s Salad',
    price: 9,
    options: {
      cucumber: {
        label: 'Cucumber',
        price: 1,
        default: true,
      },
      tomatoes: {
        label: 'Tomatoes',
        price: 1,
        default: true,
      },
      olives: {
        label: 'Olives',
        price: 1,
        default: true,
      },
    },
  },
];

const demoOrder = [
  {id: 'cake', name: 'Zio Stefano\'s Doughnut', value: 18, 
    options: [],
    quantity: 2,
  },
  {
    id: 'breakfast',
    name: 'Zia Giulia\'s Breakfast',
    value: 18,
    options: [],
    quantity: 2,
  },
  {
    id: 'coffee', name: 'Coffee', value: 2,
    options: ['latte', 'cappuccino'],
    quantity: 2,
  },

  { 
    id: 'pizza', 
    name: 'Nonna Alba\'s Pizza',
    value: 26,
    type: 'checkboxes',
    options: ['olives', 'redPeppers', 'mushrooms'],
    quantity: 1,
  },
];
    

const OrderNew = () => {            //{match}

  const [value, setValue] = React.useState('');
  const handleValueChange = event => {
    setValue(event.target.value);
  };


  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleCheckboxChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };


  return (
    <Paper className={styles.component}>
      <Grid container spacing={4} >
        <Grid item xs={12}>
          <Typography variant="h5" component="h2" align="center">Order details</Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={4}>
              <Card>
                <Typography variant="h6" component="h6">ID</Typography>
                <Divider />
                {/*<Typography variant="h6" component="h6"><span>{match.params.id}</span></Typography>*/}
                <Input 
                  id="orderId" 
                  variant="outlined" 
                  size="small"
                  value={value}
                  onChange={handleValueChange}
                />
              </Card>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Card>
                <Typography variant="h6" component="h6">TOTAL:</Typography>
                <Divider />
                <Typography variant="h6" component="h6">$</Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={4}>

            <Grid item xs={12} lg={5}>
              <Grid container spacing={2}>
                {demoProducts.map(row => (
                  <Grid item xs={12} key={row.id}>

                    <Card key={row.id}>
                      <Typography >{row.name}</Typography>
                      <Typography >{row.price}$</Typography>

                      {Object.keys(row.options).map(f => {

                        const final = row.options[f];

                        const valuesArray = Object.values(final);

                        const qtyIdName = `${row.id}${valuesArray[0]}`;

                        const details = valuesArray.map((detail, j) => {
            
                          return (<span key={j} value={detail}>{valuesArray[j]} </span>);
                            
                        });
        
                        return (
                          <Box key={f}>
                            <FormGroup>
                              <FormControlLabel
                                id={qtyIdName}
                                control={
                                  <Checkbox
                                    defaultChecked={state.checkedA}
                                    onChange={handleCheckboxChange('checkedA')}
                                    value="checkedA"
                                    color="primary"
                                  />
                                }
                                label={details}
                              />
                            </FormGroup>
                            
                            <TextField
                              id={qtyIdName}
                              variant="outlined" 
                              size="small"
                              label="Quantity"
                              value={value}
                              onChange={handleValueChange}
                            />
                          </Box>
                        );  

                      })}
                    </Card>
                  </Grid>
                ))} 

                <Grid item xs={12}>

                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SaveIcon />}
                  >
                    Save
                  </Button>  
                </Grid>

              </Grid>
              
            </Grid>

            <Grid item xs={12} lg={7}>
              <Card>
                <Typography>ORDER DETAILS:</Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Dishes</TableCell>
                      <TableCell>Options</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Value</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {demoOrder.map(row => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          
                        </TableCell>
                        <TableCell>
                          
                        </TableCell>
                        <TableCell>
                          
                        </TableCell>
                        <TableCell>
                          
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

              </Card>
            </Grid>

          </Grid>
        </Grid>

      </Grid>
    </Paper>
  );
};

OrderNew.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default OrderNew;