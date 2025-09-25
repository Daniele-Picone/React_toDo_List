import './Button.css'
function Button({ onClick, children, variant }){
    return(
        <button
            className={`btn btn-${variant}`}
            onClick={onClick}
            
            >
            {children}
        </button> 
    )
}

export default Button