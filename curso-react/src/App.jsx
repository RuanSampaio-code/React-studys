// Importando useState do React para gerenciar o estado e os componentes AddTask e Tasks
import { useState } from 'react'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

// Componente principal do aplicativo
function App() {

  // Estado inicial que contém uma lista de tarefas
  const [tasks, setTasks] = useState([
    {
      id: 1, // ID único da tarefa
      title: "Estudar programação", // Título da tarefa
      descrption: "estudar para ser desenvolvedor", // Descrição da tarefa
      isCompleted: false, // Indica se a tarefa foi concluída
    },
    {
      id: 2,
      title: "Estudar ingles",
      descrption: "estudar para melhorar ingles",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Matematica",
      descrption: "estudar para melhorar ingles",
      isCompleted: false
    }
  ]);

  // Função chamada ao clicar em uma tarefa para alternar seu estado de conclusão
  function onTaskClick(taskId) {
    // Atualiza a lista de tarefas mapeando sobre as existentes
    const newTask = tasks.map(task => {
      // Verifica se a tarefa atual corresponde ao taskId
      if (task.id === taskId) {
        // Retorna a tarefa com seu estado de conclusão invertido
        return { ...task, isCompleted: !task.isCompleted };
      }

      // Retorna a tarefa sem alterações se não for a correspondente
      return task;
    });

    // Atualiza o estado com a nova lista de tarefas
    setTasks(newTask);
  }

  // Função para deletar uma tarefa com base no seu ID
  function onDeleteTaskClick(taskId) {
    // Atualiza o estado filtrando as tarefas que não correspondem ao ID fornecido
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }

  return (
    // Layout da aplicação
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        {/* Título da aplicação */}
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
       
        {/* Componente que exibe a lista de tarefas */}
        <Tasks 
          tasks={tasks} // Passa a lista de tarefas como prop
          onTaskClick={onTaskClick} // Passa a função para alternar o estado da tarefa
          onDeleteTaskClick={onDeleteTaskClick} // Passa a função para deletar uma tarefa
        />
      </div>
      
      {/* Componente para adicionar novas tarefas */}
      <AddTask />
    </div>
  );
}

export default App;
