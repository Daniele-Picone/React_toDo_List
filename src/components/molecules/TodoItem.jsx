import { useState } from 'react';
import Button from '../atoms/Button.jsx'
import Checkbox from '../atoms/Checkbox';
import './TodoItem.css';



function TodoItem({ item, onToggle, onDelete, onEdit } ){
    // stato locale per la modalità edit (inline edit)
    const [isEditig , setIsEditing] = useState(false);
    const [editText , setEditText] = useState(item.editText);
        

    // quando clicco Modifica/Salva
    const handleEdit = ()=> {
        if(isEditig){
            // se ero in edit e clicco Salva -> invio al padre l'aggiornamento
            onEdit(item.id, editText)
        }
        setIsEditing(!isEditig) // alterna lo stato edit/view
        }

    return (
  <div className='item_custom' >
    {/* ✅ Checkbox */}
    <Checkbox checked={item.done} onChange={() => onToggle(item.id)} />

    {/* ✅ Testo o input se in modifica */}
    {isEditig ? (
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        className="border px-1 py-0.5 rounded flex-1"
      />
    ) : (
        // altrimenti mostro il testo normale 
      <span className='todo-item' >
        {item.text}
      </span>
    )}

    {/* ✅ Pulsante Modifica/Salva */}
    <Button onClick={handleEdit}>
      {isEditig? "💾 Salva" : "✏️ Modifica"}
    </Button>

    {/* ✅ Pulsante Elimina */}
    <Button onClick={() => onDelete(item.id)}>❌</Button>

    {/* ✅ Data di creazione */}
    <small >Creato il {item.createdAt}</small>
  </div>
)
}

export default TodoItem