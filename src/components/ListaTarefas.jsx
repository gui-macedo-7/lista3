import React, { useState } from 'react'

function ListaTarefas() {
    const [tarefas, setTarefas] = useState([
        { id: 1, texto: 'Comprar leite' },
        { id: 2, texto: 'Estudar React' },
        { id: 3, texto: 'Fazer exercícios' }
    ])

    const removerTarefa = (id) => {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa.id}>
                        {tarefa.texto}
                        <button onClick={() => removerTarefa(tarefa.id)}> Remover </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListaTarefas