import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#3d8a94",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  sno,
  ticketRaisedDate,
  ticketNumber,
  status,
  serviceTime,
  issue,
  raisedBy,
  ageOfTicket
) {
  return {
    sno,
    ticketRaisedDate,
    ticketNumber,
    status,
    serviceTime,
    issue,
    raisedBy,
    ageOfTicket,
  };
}

const rows = [
  createData(
    1,
    "23/06/2021",
    "0987",
    "resolved",
    "23/06/2021",
    "0",
    "UYI",
    "10"
  ),
  createData(
    2,
    "23/06/2021",
    "0987",
    "resolved",
    "23/06/2021",
    "0",
    "LKJT",
    "5"
  ),
  createData(
    3,
    "23/06/2021",
    "0987",
    "resolved",
    "23/06/2021",
    "0",
    "TUIO",
    "4"
  ),
  createData(
    4,
    "23/06/2021",
    "0987",
    "resolved",
    "23/06/2021",
    "0",
    "JHYU",
    "9"
  ),
  createData(
    5,
    "23/06/2021",
    "0987",
    "resolved",
    "23/06/2021",
    "0",
    "OIUYTM",
    "8"
  ),
];

export default function TrackTicketsTable({ ticketClickHandler }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">S.no</StyledTableCell>
            <StyledTableCell align="left">Ticket Raised Date</StyledTableCell>
            <StyledTableCell align="left">Ticket Number</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">
              Service Level Agreement Time
            </StyledTableCell>
            <StyledTableCell align="left">Issue</StyledTableCell>
            <StyledTableCell align="left">Ticket Raised By</StyledTableCell>
            <StyledTableCell align="left">Age of the Ticket</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.sno}>
              <StyledTableCell component="th" scope="row">
                {row.sno}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.ticketRaisedDate}
              </StyledTableCell>
              <StyledTableCell align="center">
                <Link
                  onClick={() => ticketClickHandler(row.ticketNumber)}
                  to="#"
                >
                  {row.ticketNumber}
                </Link>
              </StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
              <StyledTableCell align="center">
                {row.serviceTime}
              </StyledTableCell>
              <StyledTableCell align="center">{row.issue}</StyledTableCell>
              <StyledTableCell align="center">{row.raisedBy}</StyledTableCell>
              <StyledTableCell align="center">
                {row.ageOfTicket}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
