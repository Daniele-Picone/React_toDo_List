import { useState } from "react";
import Button from "../atoms/Button.jsx"

import './TodoForm.css'
import Input from "../atoms/Input.jsx";

function ToDoForm({ onAdd }) {
  const [todo, setTodo] = useState("")

  // funzione per aggiungere un item
  const addItem = () => {
    if (todo.trim() === "") return // evita item vuoti

    const newItem = {
      id: Date.now(),
      text: todo,
      done: false,
      createdAt: new Date().toLocaleDateString()
    }

    onAdd(newItem)        
    setTodo("")           
  }

  return (
    <div  className='input_section' >
      <Input
       
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Inserisci cosa fare"
      />
      <Button onClick={addItem}>➕ Aggiungi</Button>
    </div>
  )
}

export default ToDoForm