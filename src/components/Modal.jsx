import ReactDom from "react-dom";
import { useForm } from "react-hook-form";

function Modal({ toggleModal }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return ReactDom.createPortal(
    <div
      id="my-id"
      className="
      uk-position-bottom-center
      uk-width-3-4
      uk-padding-small
      uk-border-rounded
      uk-card uk-card-primary uk-card-body
      "
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
      
      "
      >
      <h2 className="uk-heading-small uk-text-bolder">Agregar tarea</h2>
      <div className="uk-divider-small" style={{background: "white"}}></div>
        <div>
          <div className="uk-margin">
            <label
              htmlFor=""
              className="uk-text-lead uk-text-emphasis"
            >
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
            <label
              htmlFor=""
              className="uk-text-lead uk-text-emphasis"
            >
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

        <input type="submit" className="uk-button uk-button-primary uk-button-large"  value="Enviar"/>
      </form>
      {/*
    
      <form onSubmit={handleSubmit(onSubmit)} className="uk-padding">
        <div className="uk-margin">
          <label htmlFor="" className="uk-text-bolder">
            Título la tarea
          </label>
          <div className="uk-inline">
            <a className="uk-form-icon" href="#" uk-icon="icon: file-text"></a>
            <input
              defaultValue="test"
              {...register("example")}
              className="uk-input uk-form-width-large"
            />
          </div>
        </div>

        <div className="uk-margin">
          <label htmlFor="" className="uk-text-bolder">
            Descripción la tarea
          </label>
          <div className="uk-inline">
            <a className="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
            <input
              {...register("exampleRequired", { required: true })}
              className="uk-input uk-form-width-large"
            />
          </div>
        </div>
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" className="uk-button uk-button-secondary" />
      </form>
     */}
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
