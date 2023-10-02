import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material/';
import { styled  } from '@mui/system';

// Definimos componentes styled para los estilos
const StyledHeaderCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#0000FF', // Azul fuerte
    color: 'white',
  }));
  
  const StyledCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#ADD8E6', // Azul claro
  }));
  function CustomTable() {
    // Datos de ejemplo
    const rows = [
      { name: "Juan", age: 28 },
      { name: "María", age: 24 },
      { name: "Carlos", age: 30 },
    ];
  
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledHeaderCell>Nombre</StyledHeaderCell>
              <StyledHeaderCell>Edad</StyledHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <StyledCell>{row.name}</StyledCell>
                <StyledCell>{row.age}</StyledCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  
  export default CustomTable;