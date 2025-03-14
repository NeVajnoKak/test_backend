import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

const attributes = [
  { name: "ИИН/БИН", type: "string", required: true, description: "Идентификационный номер клиента" },
  { name: "ФИО", type: "string", required: true, description: "Фамилия Имя Отчество" },
  { name: "Дата рождения", type: "date", required: true, description: "Дата рождения клиента" },
  { name: "Статус клиента", type: "enum", required: true, description: "Например: Активен, Заблокирован" },
  { name: "Карточка клиента", type: "boolean", required: false, description: "Есть ли карточка клиента" },
  { name: "Счета", type: "array", required: false, description: "Список счетов клиента" },
];

const AttributesTable = () => (
  <TableContainer component={Paper}>
    <Typography variant="h6" sx={{ m: 2 }}>Атрибуты бизнес-процесса</Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell><strong>Атрибут</strong></TableCell>
          <TableCell><strong>Тип</strong></TableCell>
          <TableCell><strong>Обязательный</strong></TableCell>
          <TableCell><strong>Описание</strong></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {attributes.map((attr, index) => (
          <TableRow key={index}>
            <TableCell>{attr.name}</TableCell>
            <TableCell>{attr.type}</TableCell>
            <TableCell>{attr.required ? "Да" : "Нет"}</TableCell>
            <TableCell>{attr.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default AttributesTable;
