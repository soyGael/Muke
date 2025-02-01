import { useEffect, useState } from 'react';

const Tasks = ({ newTask, onEditTask, onDeleteTask }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    if (newTask) {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  }, [newTask]);

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    onDeleteTask(updatedTasks);
  };

  const handleEdit = (index) => {
    const taskToEdit = tasks[index];
    onEditTask(taskToEdit, index);
  };

  return (
    <div className="uk-card uk-card-default uk-card-body">
      <h2 className='uk-card-title'>Lista de Tareas</h2>
      {tasks.length === 0 ? (
        <p>No hay tareas disponibles. ¡Agrega una nueva tarea!</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Estado: {task.status}</p>
              <p>Fecha de creación: {task.createdAt}</p>
              <button onClick={() => handleEdit} className="uk-button uk-button-primary">Editar</button>
              <button onClick={() => handleDelete(index)} className="uk-button uk-button-danger">Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;
