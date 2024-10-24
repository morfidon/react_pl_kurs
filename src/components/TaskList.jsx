import { useState, useRef } from 'react'
import { v4 } from 'uuid'

const SortButton = ({sortDirection, handleSort}) =>
{
    return (
        <button onClick={handleSort}>
            Sort {sortDirection === 'asc' ? 'desc' : 'asc'}
        </button>
    )
}
function TaskList(){
    const tasks = [
        'Do homework', 
        'Buy milk', 
        'Clean room', 
        'Cook dinner' 
    ]
    const [tasksDictionary, setTasksDictionary] = useState(tasks.map(task => (
        {
            id: v4(),
            text: task
        }
    )))
        // Licznik renderów
        const renderCount = useRef(0);
        renderCount.current++;
    const [newTask, setNewTask] = useState('')
    const [sortDirection, setSortDirection] = useState('asc') //ascending
    const inputTaskRef = useRef(null);

    const handleRemoveTask = (id) => //79
    {
        setTasksDictionary(tasksDictionary.filter(
            task => task.id !== id
        ))
    };

    const handleAddTask = (e) => { 
        
        e.preventDefault();
        inputTaskRef.current.focus();
        if(newTask.trim() === '') return;

        const updatedTasks = (
            [...tasksDictionary,
            {
                id: v4(),
                text: newTask
            }]
        )
        updatedTasks.sort((a, b) => b.text.localeCompare(a.text))

        setTasksDictionary(updatedTasks)

        setNewTask('');
        
    }

    const handleSort = () => {
        const sortedTasks = [...tasksDictionary].sort((a, b) => {
            return sortDirection === 'asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
        })

        setTasksDictionary(sortedTasks)
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
        
    }

    return (
        <>
        <p>Liczba renderów: {renderCount.current}</p>
           <form onSubmit={handleAddTask}>
               <input type="text" value={newTask}
               onChange={(e) => setNewTask(e.target.value)}
                ref={inputTaskRef}
               />
               <button type="submit">Add Task</button>
           </form>
           <SortButton 
                sortDirection={sortDirection}
                onSort={handleSort}
           />
           
           <ul>
                {
                    tasksDictionary.map(task => 
                    <li key={task.id}>{task.text}
                      <button onClick={() => handleRemoveTask(task.id)}>X</button>
                    </li>
                )
                }
           </ul>
        </>     
    )
}

export default TaskList