import { v4 } from 'uuid'
function TaskList(){
    const tasks = [
        'Do homework',
        'Buy milk',
        'Clean room',
        'Cook dinner'       
    ]
    const tasksProccessed = tasks.map(task => (
        {
            id: v4(),
            text: task
        }
    ))

    // map - przyporządkuj
    
    return (
        <>
           <ul>
                {
                    tasksProccessed.map(task => <li key={task.id}>{task.text}</li>)
                }
           </ul>
        </>     
    )
}

export default TaskList