import { Link } from 'react-router-dom';
import './Button.css'
function Button(props) {
    const {clasName,content} = props.props
    return(
        <>
            <Link className={clasName} > {content} </Link>
        </>
    )
}

export default Button;