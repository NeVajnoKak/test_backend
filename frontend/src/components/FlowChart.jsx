import React from "react";
import ReactFlow, { Background, Controls, Handle, MiniMap, Position } from "reactflow";
import "reactflow/dist/style.css";

const CustomNode = ({ data }) => (
  <div className="relative p-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg border border-blue-300 text-center">
    <strong className="block text-lg">{data.label}</strong>
    <Handle type="target" position={Position.Top} className="w-3 h-3 bg-red-500" />
    <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-green-500" />
  </div>
);

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [
  { id: "1", type: "custom", position: { x: 250, y: 0 }, data: { label: "Запуск процесса" } },
  { id: "2", type: "custom", position: { x: 100, y: 100 }, data: { label: "Ввод ИИН/БИН" } },
  { id: "3", type: "custom", position: { x: 100, y: 200 }, data: { label: "Поиск клиента в АБС Colvir" } },
  { id: "4", type: "custom", position: { x: 100, y: 300 }, data: { label: "Получение данных по клиенту" } },
  { id: "5", type: "custom", position: { x: -100, y: 400 }, data: { label: "Отсутствует роль 'Клиент'" } },
  { id: "6", type: "custom", position: { x: 100, y: 400 }, data: { label: "Карточка и Счета имеются" } },
  { id: "7", type: "custom", position: { x: 300, y: 400 }, data: { label: "Карточка имеется, но счета нет" } },
  { id: "8", type: "custom", position: { x: 100, y: 500 }, data: { label: "Проверка срока полномочий" } },
  { id: "9", type: "custom", position: { x: -100, y: 600 }, data: { label: "Срок полномочий просрочен" } },
  { id: "10", type: "custom", position: { x: 100, y: 600 }, data: { label: "Срок полномочий не просрочен" } },
  { id: "11", type: "custom", position: { x: 100, y: 700 }, data: { label: "Выбор УЛ" } },
  { id: "12", type: "custom", position: { x: 100, y: 800 }, data: { label: "Выбор счета" } },
  { id: "13", type: "custom", position: { x: 0, y: 900 }, data: { label: "Заполнение заявки" } },
  { id: "14", type: "custom", position: { x: 200, y: 900 }, data: { label: "Отмена процесса" } },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e4-5", source: "4", target: "5" },
  { id: "e4-6", source: "4", target: "6" },
  { id: "e4-7", source: "4", target: "7" },
  { id: "e6-8", source: "6", target: "8" },
  { id: "e8-9", source: "8", target: "9" },
  { id: "e8-10", source: "8", target: "10" },
  { id: "e10-11", source: "10", target: "11" },
  { id: "e11-12", source: "11", target: "12" },
  { id: "e12-13", source: "12", target: "13" },
  { id: "e12-14", source: "12", target: "14" },
];

const FlowChart = () => {
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow nodes={initialNodes} edges={initialEdges} nodeTypes={nodeTypes} fitView>
          <MiniMap />
          <Controls />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
    );
  };
  

export default FlowChart;