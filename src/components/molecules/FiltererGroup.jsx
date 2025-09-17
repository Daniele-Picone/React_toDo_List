
import Button from "../atoms/Button";
import './FiltererGroup.css';
function FiltererGroup({ filter, setFilter }) {
  return (
    <div className="button_section">
      <Button
        variant={filter === "all" ? "primary" : "secondary"}
        onClick={() => setFilter("all")}
      >
        Tutti
      </Button>
      <Button
        variant={filter === "active" ? "primary" : "secondary"}
        onClick={() => setFilter("active")}
      >
        Attivi
      </Button>
      <Button
        variant={filter === "completed" ? "primary" : "secondary"}
        onClick={() => setFilter("completed")}
      >
        Completati
      </Button>
    </div>
  )
}

export  default FiltererGroup