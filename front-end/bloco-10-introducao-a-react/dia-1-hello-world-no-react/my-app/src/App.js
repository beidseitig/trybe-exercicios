import React from "react";

const Task = (value) => {
  return (
    <li key={value}> {value} </li>
  );
}

const tarefas = ['Estudar', 'Trabalhar', 'Ler', 'Jogar'];

function App() {
  return (
    <ul>{ tarefas.map((tarefa) => Task(tarefa)) }</ul>
  );
}

export default App;
