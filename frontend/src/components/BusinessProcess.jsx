import React from "react";
import { Container, Typography, Stack } from "@mui/material";
import AttributesTable from "./AttributesTable";
import UserTaskStatesTable from "./UserTaskStatesTable";
import StepsTable from "./StepsTable";

const BusinessProcess = () => (
  <Container sx={{ my: 4 }}>
    <Typography variant="h4" gutterBottom>
      Бизнес-процесс: Оформление клиента
    </Typography>
    <Stack spacing={4}>
      <AttributesTable />
      <UserTaskStatesTable />
      <StepsTable />
    </Stack>
  </Container>
);

export default BusinessProcess;
