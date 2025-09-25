
import './Input.css'
 export default function Input({ type= 'text' , value  , onChange , placeholder , variant}) {
    return(
        <input 
        className={`input input-${variant}`}
        type={type} 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        />
    )

}
