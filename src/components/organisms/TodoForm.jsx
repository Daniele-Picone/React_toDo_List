import { useState } from "react";
import Input from "../atoms/input";
import Button from "../atoms/Button.jsx"

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
    <div >
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