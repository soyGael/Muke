import { useEffect, useState } from "react";
import Modal from "../components/Modal_Change";

const Tasks = ({ newTask, onEditTask, onDeleteTask }) => {
  const [tasks, setTasks] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [taskIndex, setTaskIndex] = useState(null);
  const [filter, setFilter] = useState("Todas");

  const toggleModal = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    if (newTask) {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  }, [newTask]);

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    onDeleteTask(updatedTasks);
  };

  const handleEdit = (task, index) => {
    setTaskToEdit(task);
    setTaskIndex(index);
    toggleModal();
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Todas") return true;
    return task.status === filter;
  });

  return (
    <div className="uk-card uk-card-default uk-card-body">
      <h2 className="uk-card-title">Lista de Tareas</h2>
      <div className="uk-margin">
        <label htmlFor="filter" className="uk-form-label">Filtrar por estado:</label>
        <select
          id="filter"
          className="uk-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="Todas">Todas</option>
          <option value="Pendiente">Pendiente</option>
          <option value="Terminado">Terminado</option>
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
              <button
                onClick={() => handleEdit(task, index)}
                className="uk-button uk-button-primary"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="uk-button uk-button-danger"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      {isOpen && <Modal toggleModal={toggleModal} addTask={onEditTask} taskToEdit={taskToEdit} taskIndex={taskIndex} title="Modificar tarea"/>}
    </div>
  );
};

export default Tasks;
