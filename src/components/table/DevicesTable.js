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

function createData(sno, imei, inwardedOn, inwardedBy, deviceType) {
  return {
    sno,
    imei,
    inwardedOn,
    inwardedBy,
    deviceType,
  };
}

const rows = [
  createData(1, "XY6789FRHP", "23/4/2021", "HJG", "Two Wheeler"),
  createData(2, "XY6789FRRO", "24/6/2021", "HOG", "Three Wheeler"),
  createData(3, "XY6789FRHX", "27/7/2021", "HKG", "Four Wheeler"),
  createData(4, "XY6789XXXX", "23/8/2021", "HLG", "Two Wheeler"),
  createData(5, "XY6789GHOR", "23/5/2021", "TYG", "Two Wheeler"),
];

export default function DivicesTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">S.no</StyledTableCell>
            <StyledTableCell align="center">IMEI</StyledTableCell>
            <StyledTableCell align="center">Inwarded On</StyledTableCell>
            <StyledTableCell align="center">Inwarded By</StyledTableCell>
            <StyledTableCell align="center">Device Type</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.sno}>
              <StyledTableCell component="th" scope="row">
                {row.sno}
              </StyledTableCell>
              <StyledTableCell align="center">{row.imei}</StyledTableCell>
              <StyledTableCell align="center">{row.inwardedOn}</StyledTableCell>
              <StyledTableCell align="center">{row.inwardedBy}</StyledTableCell>
              <StyledTableCell align="center">{row.deviceType}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
