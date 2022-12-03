import '../Divider/Divider.scss'

const Divider = (props) => {

    console.log(props)

    return (
        <hr className={`divider ${props.className ? props.className : ''}`}></hr>
    )
}

export default Divider;