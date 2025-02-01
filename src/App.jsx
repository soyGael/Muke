import { useState } from "react"
import Header from "./components/header"
import Modal from "./components/Modal"
function App() {

  const [isOpen, setOpen] = useState(false)

  const toggleModal = () => {
    setOpen(!isOpen)
  }

  return (
    <>
    <Header/>
    <button onClick={toggleModal}>x</button>
    {isOpen && <Modal toggleModal={toggleModal}/>}
    </>
  )
}

export default App
