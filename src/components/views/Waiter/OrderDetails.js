import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


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

const OrderDetails = () => {
  return (
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
                {row.name}
              </TableCell>
              <TableCell>
                {row.options.map(option => (
                  <div key={option}>{option}</div>
                ))}
              </TableCell>
              <TableCell>
                {row.quantity}
              </TableCell>
              <TableCell>
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};


export default OrderDetails;