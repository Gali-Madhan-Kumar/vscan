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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginTop: "1rem",
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

export default function ManagerAgentTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">S.no</StyledTableCell>
            <StyledTableCell align="left">Agent Name</StyledTableCell>
            <StyledTableCell align="left">Agent Code - Zone</StyledTableCell>
            <StyledTableCell align="left">IMEI Number</StyledTableCell>
            <StyledTableCell align="left">
              Device Activation Date
            </StyledTableCell>
            <StyledTableCell align="left">Garage Name</StyledTableCell>
            <StyledTableCell align="left">Number of Scans</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <StyledTableRow key={row.sno}>
              <StyledTableCell component="th" scope="row">
                {row.sno}
              </StyledTableCell>
              <StyledTableCell align="center">{row.agentName}</StyledTableCell>
              <StyledTableCell align="center">{row.agentCode}</StyledTableCell>
              <StyledTableCell align="center">{row.imeiNumber}</StyledTableCell>
              <StyledTableCell align="center">
                {row.deviceActivationDate}
              </StyledTableCell>
              <StyledTableCell align="center">{row.garageName}</StyledTableCell>
              <StyledTableCell align="center">{row.noOfScans}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
