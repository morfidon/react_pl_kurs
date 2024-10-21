function TaskList(){
    const tasks = [
        'Do homework',
        'Buy milk',
        'Clean room',
        'Cook dinner'       
    ]
    // map - przyporządkuj
    
    return (
        <>
           <ul>
                {
                    tasks.map(task => <li>{task}</li>)
                }
           </ul>
        </>     
    )
}

export default TaskList