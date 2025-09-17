


function Checkbox({ checked, onChange }) {
  return (
    <input
      type="checkbox"
      checked={checked}     // mostra se la checkbox è selezionata
      onChange={onChange}   // chiama la funzione quando clicchi
    />
  )
}

export default Checkbox