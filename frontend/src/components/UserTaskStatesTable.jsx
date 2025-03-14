import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

const userTasks = [
  { task: "Ввод ИИН/БИН", state: "Ожидание", buttons: ["Отправить", "Отмена"] },
  { task: "Поиск клиента", state: "Выполняется", buttons: [] },
  { task: "Получение данных", state: "Завершен", buttons: ["Продолжить"] },
  { task: "Проверка полномочий", state: "Ожидание", buttons: ["Проверить", "Отмена"] },
  { task: "Выбор счета", state: "Ожидание", buttons: ["Выбрать", "Назад"] },
];

const UserTaskStatesTable = () => (
  <TableContainer component={Paper}>
    <Typography variant="h6" sx={{ m: 2 }}>Состояния пользовательских тасков</Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell><strong>Юзер таск</strong></TableCell>
          <TableCell><strong>Состояние</strong></TableCell>
          <TableCell><strong>Кнопки</strong></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {userTasks.map((task, index) => (
          <TableRow key={index}>
            <TableCell>{task.task}</TableCell>
            <TableCell>{task.state}</TableCell>
            <TableCell>{task.buttons.join(", ") || "—"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default UserTaskStatesTable;
