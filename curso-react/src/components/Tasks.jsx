// Importando os ícones ChevronRightIcon e TrashIcon da biblioteca "lucide-react"
import { ChevronRightIcon, TrashIcon } from "lucide-react";

// Componente Tasks
function Tasks(props) {
    // Exibindo as props recebidas no console para depuração
    console.log(props);

    return (
        // Criação de uma lista (<ul>) com estilo aplicado para espaçamento, padding, fundo, bordas arredondadas e sombra
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {/* Iterando sobre as tarefas recebidas via props */}
            {props.tasks.map((task) => (
                // Cada tarefa é representada como um item de lista (<li>)
                <li key={task.id} className="flex gap-2">
                    {/* Botão principal que exibe o título da tarefa */}
                    <button
                        // Ao clicar no botão, chama a função onTaskClick passando o id da tarefa
                        onClick={() => props.onTaskClick(task.id)}
                        // Estilo dinâmico: adiciona "line-through" se a tarefa estiver concluída (isCompleted)
                        className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted && 'line-through'}`}
                    >
                        {/* Título da tarefa */}
                        {task.title}
                    </button>

                    {/* Botão com o ícone ChevronRightIcon */}
                    <button className="bg-slate-400 p-2 rounded-md text-white">
                        <ChevronRightIcon />
                    </button>

                    {/* Botão para deletar a tarefa */}
                    <button
                        // Ao clicar, chama a função deleteTask passando o id da tarefa
                        onClick={() => props.onDeleteTaskClick(task.id)}
                        className="bg-slate-400 p-2 rounded-md text-white"
                    >
                        <TrashIcon /> {/* Ícone de lixeira representando "deletar" */}
                    </button>
                </li>
            ))}
        </ul>
    );
}

// Exporta o componente Tasks para que possa ser usado em outros arquivos
export default Tasks;
