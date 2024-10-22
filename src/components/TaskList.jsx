import { useState, useRef } from 'react'
import { v4 } from 'uuid'
function TaskList(){
    const tasks = [
        'Do homework', //100
        'Buy milk', //79
        'Clean room', //5125125
        'Cook dinner' //12421  
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
    const newTaskInputRef = useRef()
    // map - przyporządkuj
    // tasks.map(element_z_taska => co_ma_sie_stac_z_elemen_z_taska)
    // tasks.filter(element_z_taska => warunek)
    // Które elementy mają wartość 'true' dla tego warunku i te właśnie maja trafić do NOWEJ tablicy
    const handleRemoveTask = (id) => //79
    {
        setTasksDictionary(tasksDictionary.filter(
            task => task.id !== id
        ))
    };
    const handleAddTask = () => { 
        setTasksDictionary(
            [...tasksDictionary,
            {
                id: v4(),
                text: newTaskInputRef.current.value
            }]
        )
        newTaskInputRef.current.value = '';
    }
    //useRef - hook
    //niekontrolowany input
    //wirtualny DOM - kopii wirtualnej tego oryginał (tego DOM co widzi użytkownik)
    return (
        <>
        <p>Liczba renderów: {renderCount.current}</p>
           <input type="text" ref={newTaskInputRef} />
           <button onClick={handleAddTask}>Add Task</button>
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