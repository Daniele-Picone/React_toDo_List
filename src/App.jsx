
import { useState } from 'react';
import ToDoForm from "./components/organisms/TodoForm.jsx";
import TodoList from "./components/organisms/TodoList.jsx";
import FiltererGroup from './components/molecules/FiltererGroup.jsx';
import './App.css'
function App() {
  // stato principale: lista items
  const [items, setItems] = useState([])
  // aggiungi un nuovo item (riceve l'oggetto da ToDoForm)
  const addItem = (newItem) => setItems([...items, newItem])
  // toggle: spunta / despunta il task
  const toggleItem = (id) => setItems(items.map(i => i.id === id ? { ...i, done: !i.done } : i))
  // elimina: crea nuovo array senza l'item con quell'id
  const deleteItem = (id) => setItems(items.filter(i => i.id !== id))
  // modifica testo
  const editItem = (id, newText) => setItems(items.map(i => i.id === id ? { ...i, text: newText } : i))

// stato filtro (all | active | completo)
  const [filter, setFilter] = useState("all") 
    // calcola lista filtrata da passare alla TodoList
  const filteredItems = items.filter(item => {
    if (filter === "all") return true
    if (filter === "active") return !item.done
    if (filter === "completed") return item.done
  })
  

  return (
    <div className="app-container">
      <h1>📝 La mia TodoList</h1>

      {/* Qui dovrebbe comparire l'input */}
      <ToDoForm onAdd={addItem} />
        {/* FILTRI: cambia filter nello stato */}
        <FiltererGroup filter={filter} setFilter={setFilter} />

      {/* LISTA: riceve solo gli items filtrati */}
      <h3>{filter === 'all' ? 'Lista delle attività': filter === 'active'? 'Attività da svolgere' : 'Attività Completate'}</h3>
      <TodoList
        items={filteredItems}
        onToggle={toggleItem}
        onDelete={deleteItem}
        onEdit={editItem}
      />
    </div>
  )
}

export default App