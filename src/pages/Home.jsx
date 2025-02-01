import { useState } from "react";
import Header from "../components/header";
import Modal from "../components/Modal";
import Tasks from "../components/Tasks";

function Home() {
  const [isOpen, setOpen] = useState(false);
  const [newTask, setNewTask] = useState(null);

  const toggleModal = () => {
    setOpen(!isOpen);
  };

  const addTask = (task) => {
    setNewTask(task);
  };

  return (
    <>
      <Header />
      <button onClick={toggleModal} className="uk-border-circle uk-background-primary uk-position-bottom-right" style={{height: "70px", width: "70px", margin: "10px", border: "none", fontSize:"32px", fontWeight: "Bold", color:"white"}}>
      +
      </button>
      {isOpen && <Modal toggleModal={toggleModal} addTask={addTask} />}
      <Tasks newTask={newTask} />
    </>
  );
}

export default Home;
