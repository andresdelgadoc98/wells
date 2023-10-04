import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
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

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Correo</TableCell>
            <TableCell align="right">Tipo de usuario</TableCell>
            <TableCell align="right">Recibir notificaciones</TableCell>
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
                <select
                  value={row.recibir_notificaciones}
                  onChange={(e) => handleRecibirNotificacionesChange(row.id, e.target.value)}
                >
                  <option value="si">Sí</option>
                  <option value="no">No</option>
                </select>
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


//            propuesta de estructura de JSON
// [
//   {
//     "nombre": "Nombre1",
//     "correo": "correo1@example.com",
//     "tipo_usuario": "Tipo1",
//     "recibir_notificaciones": "si"
//   },
//   {
//     "nombre": "Nombre2",
//     "correo": "correo2@example.com",
//     "tipo_usuario": "Tipo2",
//     "recibir_notificaciones": "no"
//   },
//   {
//     "nombre": "Nombre3",
//     "correo": "correo3@example.com",
//     "tipo_usuario": "Tipo3",
//     "recibir_notificaciones": "si"
//   }
// ]

