import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MyTable = ({ beer }) => {
  if (typeof beer === "undefined") {
    return null;
  }

  const abv = beer[0].abv;
  const ibu = beer[0].ibu;
  const attenuationLvl = beer[0].attenuation_level;
  const ebc = beer[0].ebc;

  function createData(name, value) {
    return { name, value };
  }

  const rows = [
    createData("ABV", abv),
    createData("IBU", ibu),
    createData("Attenuation level", attenuationLvl),
    createData("EBC", ebc),
  ];

  return (
    <TableContainer sx={{marginBottom: '15px'}} component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Info </TableCell>
            <TableCell align="right">Value </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
