import { useEffect, useState } from 'react';

const Tasks = ({ newTask, onEditTask, onDeleteTask }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('Todas');

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

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Pendientes') {
      return task.status === 'Pendiente';
    } else if (filter === 'Terminadas') {
      return task.status === 'Terminado';
    } else {
      return true;
    }
  });

  return (
    <div className="uk-card uk-card-default uk-card-body">
      <h2 className='uk-card-title'>Lista de Tareas</h2>
      <div className="uk-margin">
        <label htmlFor="filter" className="uk-form-label">Filtrar por:</label>
        <select id="filter" className="uk-select" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="Todas">Todas</option>
          <option value="Pendientes">Pendientes</option>
          <option value="Terminadas">Terminadas</option>
        </select>
      </div>
      {filteredTasks.length === 0 ? (
        <p>No hay tareas disponibles. ¡Agrega una nueva tarea!</p>
      ) : (
        <ul>
          {filteredTasks.map((task, index) => (
            <li key={index}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Estado: {task.status}</p>
              <p>Fecha de creación: {task.createdAt}</p>
              <button onClick={() => handleEdit(index)} className="uk-button uk-button-primary">Editar</button>
              <button onClick={() => handleDelete(index)} className="uk-button uk-button-danger">Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;
