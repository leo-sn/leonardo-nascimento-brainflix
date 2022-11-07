import '../Button/Button.scss'

const Button = (props) => {

    return (
        <button className={`button ${props.type != null ? "button__"+props.type : ""}`}></button>
    )
}

export default Button;