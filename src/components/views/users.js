import * as React from 'react';
import { Table,TableBody,TableContainer,TableHead,TableRow,Paper,Select,MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const jsonData = [
  {
    "id": "1",
    "nombre": "Nombre1",
    "correo": "correo1@example.com",
    "tipo_usuario": "Tipo1",
    "recibir_notificaciones": "si"
  },
  {
    "id": "2",
    "nombre": "Nombre2",
    "correo": "correo2@example.com",
    "tipo_usuario": "Tipo2",
    "recibir_notificaciones": "no"
  },
  {
    "id": "3",
    "nombre": "Nombre3",
    "correo": "correo3@example.com",
    "tipo_usuario": "Tipo3",
    "recibir_notificaciones": "si"
  }
]

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.info.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Nombre</StyledTableCell>
          <StyledTableCell align="right">Correo</StyledTableCell>
          <StyledTableCell align="right">Tipo de usuario</StyledTableCell>
          <StyledTableCell align="right">Recibir notificaciones</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          {jsonData.map((row,) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.nombre}</TableCell>
              <TableCell align="right">{row.correo}</TableCell>
              <TableCell align="right">{row.tipo_usuario}</TableCell>
              <TableCell align="right">
                <Select
                  value={row.recibir_notificaciones}
                  onChange={(e) => handleRecibirNotificacionesChange(row.id, e.target.value)}
                >
                  <MenuItem value="si">Sí</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
  );
}

function handleRecibirNotificacionesChange(id, value){
  console.log(id, value)
}



