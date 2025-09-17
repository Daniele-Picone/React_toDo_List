import TodoItem from "../molecules/TodoItem.jsx"
import './TodoList.css'

function TodoList({ items, onToggle, onDelete, onEdit }) {
    // conteggio dei rimanenti (non completati)
    const remaining = items.filter(item => !item.done).length
    
    return (
        <div className="list_section" >
        {/* Lista dei task */}
        {items.length === 0 ? (
            <p>Nessun toDo ancora 🙌</p>
        ) : (
            items.map(item => (
                <TodoItem
                key={item.id}
                item={item}
                onToggle={onToggle}
                onDelete={onDelete}
                onEdit={onEdit}
                />
            ))
        )}
        
        {/* Conteggio */}
        <p >
            {remaining} task rimanenti
        </p>
        </div>
    )
}

export default TodoList
