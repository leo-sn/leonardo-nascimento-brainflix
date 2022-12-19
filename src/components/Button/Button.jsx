import '../Button/Button.scss'

const Button = (props) => {

    return (
        <button type={props.type != null ? props.type : ''} form={props.form != null ? props.form : ''} className={`button ${props.kind != null ? "button__"+props.kind : ""}`}></button>
    )
}

export default Button;