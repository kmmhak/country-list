
import {Link} from 'react-router-dom'

function Button ({icon, url}) {

    return(
        <Link to={url}>
        <button >{icon}</button>
        </Link>
    )
}

export default Button;