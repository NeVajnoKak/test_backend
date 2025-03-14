import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

const steps = [
  { id: 1, name: "Запуск процесса", next: "Ввод ИИН/БИН" },
  { id: 2, name: "Ввод ИИН/БИН", next: "Поиск клиента" },
  { id: 3, name: "Поиск клиента", next: "Получение данных" },
  { id: 4, name: "Получение данных", next: "Проверка полномочий" },
  { id: 5, name: "Проверка полномочий", next: "Выбор счета" },
  { id: 6, name: "Выбор счета", next: "Заполнение заявки" },
];

const StepsTable = () => (
  <TableContainer component={Paper}>
    <Typography variant="h6" sx={{ m: 2 }}>Последовательность шагов БП</Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell><strong>#</strong></TableCell>
          <TableCell><strong>Шаг</strong></TableCell>
          <TableCell><strong>Следующий шаг</strong></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {steps.map((step) => (
          <TableRow key={step.id}>
            <TableCell>{step.id}</TableCell>
            <TableCell>{step.name}</TableCell>
            <TableCell>{step.next}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default StepsTable;
