import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, compensation, IN, OUT, bonus, sales) {
  return { id, date, name, compensation, IN, OUT, bonus, sales };
}

const rows = [
  createData(0, '16 Jan, 2021', 'El-Lea', '0.12 OUT + 0.01 Bonus', 594, 1.015, 488, '126.68$'),
  createData(1, '16 Feb, 2021', 'El-Andreas', '0.20 IN + 0.01 Bonus', 1.135, 1.674, 583, '232.83$'),
  createData(2, '16 March, 2021', 'El-Wiebke', '0.20 IN + 0.01 Bonus', 1.012, 1.532, 497, '207.37$'),
  createData(3, '16 April, 2021', 'El-Enrico', '0.20 IN + 0.01 Bonus', 533, 785, 25, '106.85$'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>User name</TableCell>
            <TableCell>Compensation</TableCell>
            <TableCell>IN</TableCell>
            <TableCell>OUT</TableCell>
            <TableCell>Bonus</TableCell>
            <TableCell align="right">Sale OUT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.compensation}</TableCell>
              <TableCell>{row.IN}</TableCell>
              <TableCell>{row.OUT}</TableCell>
              <TableCell>{row.bonus}</TableCell>
              <TableCell align="right">{row.sales}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}