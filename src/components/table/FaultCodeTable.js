import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles({
  paper: {
    width: "150vw",
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

export default function FaultyCodeTable({ data }) {
  const classes = useStyles();

  const formattedSymptoms = data.map((row) => row.symptoms.split(":"));
  const formattedCauses = data.map((row) => row.causes.split(":"));
  const formattedFixes = data.map((row) => row.fixes.split(":"));
  const formattedRelatedParts = data.map((row) => row.relatedParts.split(":"));

  return (
    <Paper className={classes.paper}>
      <Table stickyHeader className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">S.no</StyledTableCell>
            <StyledTableCell align="center">Code</StyledTableCell>
            <StyledTableCell align="center">Make</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Category</StyledTableCell>
            <StyledTableCell align="center">Symptoms</StyledTableCell>
            <StyledTableCell align="center">Causes</StyledTableCell>
            <StyledTableCell align="center">Fixes</StyledTableCell>
            <StyledTableCell align="center">RelatedParts</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="left">{row.code}</StyledTableCell>
              <StyledTableCell align="left">{row.make}</StyledTableCell>
              <StyledTableCell align="left">{row.description}</StyledTableCell>
              <StyledTableCell align="left">{row.category}</StyledTableCell>
              <StyledTableCell align="left">
                <ul>
                  {formattedSymptoms[index].map((content) => (
                    <li key={content}>{content}</li>
                  ))}
                </ul>
              </StyledTableCell>
              <StyledTableCell align="left">
                <ul>
                  {formattedCauses[index].map((content) => (
                    <li key={content}>{content}</li>
                  ))}
                </ul>
              </StyledTableCell>
              <StyledTableCell align="left">
                <ul>
                  {formattedFixes[index].map((content) => (
                    <li key={content}>{content}</li>
                  ))}
                </ul>
              </StyledTableCell>
              <StyledTableCell align="left">
                <ul>
                  {formattedRelatedParts[index].map((content) => (
                    <li key={content}>{content}</li>
                  ))}
                </ul>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
