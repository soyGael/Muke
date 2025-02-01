import ReactDom from "react-dom";

function Modal({ toggleModal }) {
  return ReactDom.createPortal(
    <div id="my-id" className="uk-animation-slide-top-medium">
    <h2>Hola mundo</h2>
    <button onClick={toggleModal}>Cerrar</button>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
