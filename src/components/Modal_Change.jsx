import ReactDom from "react-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import "../styles/Modal.css"; 

function Modal_Change({ toggleModal, addTask, taskToEdit, taskIndex, title = "Agregar tareas" }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [estado, setEstado] = useState(false);

  useEffect(() => {
    if (toggleModal) {
      setEstado(true);
    } else {
      setEstado(false);
    }
  }, [toggleModal]);

  useEffect(() => {
    if (taskToEdit) {
      setValue("title", taskToEdit.title);
      setValue("description", taskToEdit.description);
      setValue("status", taskToEdit.status);
    }
  }, [taskToEdit, setValue]);

  const onSubmit = (data) => {
    const newTask = {
      ...data,
      createdAt: taskToEdit ? taskToEdit.createdAt : new Date().toLocaleString()
    };
    const updatedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (taskIndex !== null) {
      updatedTasks[taskIndex] = newTask;
    } else {
      updatedTasks.push(newTask);
    }
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    toggleModal(); 
    window.location.reload(); 
  };

  return ReactDom.createPortal(
    <div
      id="my-id"
      className={`modal uk-width-3-4 uk-padding-small uk-card uk-card-primary uk-card-body ${
        estado
          ? "modal-enter modal-enter-active"
          : "modal-exit modal-exit-active"
      }`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="uk-form"
      >
        <h2 className="uk-heading-small uk-text-bolder">{title}</h2>
        <div className="uk-divider-small" style={{ background: "white" }}></div>
        <div>
          <div className="uk-margin">
            <label htmlFor="" className="uk-text-lead uk-text-emphasis">
              Título de la tarea
            </label>
            <div className="uk-inline">
              <a
                className="uk-form-icon uk-text-emphasis uk-form-icon-flip"
                href="#"
                uk-icon="icon: file-text"
              ></a>
              <input
                {...register("title", { required: true })}
                className="uk-input uk-form-width-large"
              />
            </div>
          </div>

          {errors.title && (
            <div uk-alert="true" className="uk-alert-danger">
              <a href="true" className="uk-alert-close" uk-close="true"></a>
              <p className="uk-text-middle">Complete el título</p>
            </div>
          )}

          <div className="uk-margin">
            <label htmlFor="" className="uk-text-lead uk-text-emphasis">
              Descripción de la tarea
            </label>
            <div className="uk-inline">
              <a
                className="uk-form-icon uk-text-bolder uk-form-icon-flip"
                style={{ color: "white" }}
                href="#"
                uk-icon="icon: pencil"
              ></a>
              <input
                {...register("description", { required: true })}
                className="uk-input uk-form-width-large"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="uk-margin">
            <p className="uk-form-label uk-margin-xsmall uk-text-lead uk-text-emphasis">
              Estatus de la actividad
            </p>
            <select {...register("status")} className="uk-select uk-width-1-2">
              <option value="Pendiente">Pendiente</option>
              <option value="Terminado">Terminado</option>
            </select>
          </div>
        </div>

        <div className="uk-flex uk-flex-around">
          <input
            type="submit"
            className="uk-button uk-text-bold uk-button-primary uk-button-large"
            value="Guardar"
          />
          <button onClick={toggleModal} className="uk-button uk-button-danger">
            Cancelar
          </button>
        </div>
      </form>
    </div>,
    document.getElementById("portal_edit")
  );
}

export default Modal_Change;
