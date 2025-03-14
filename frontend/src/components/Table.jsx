import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const data = [
  { id: 1, name: "Запуск процесса", type: "Начало", status: "Активен" },
  { id: 2, name: "Ввод ИИН/БИН", type: "Ввод данных", status: "Ожидание" },
  { id: 3, name: "Поиск клиента в АБС Colvir", type: "Запрос", status: "Выполнен" },
];

const TableComponent = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Название шага</TableCell>
            <TableCell>Тип</TableCell>
            <TableCell>Статус</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
