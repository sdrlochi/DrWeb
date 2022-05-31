import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Button = (props) => {

    const { onClick } = props

    return (
        <div onClick={onClick} class="h_container">
            <FontAwesomeIcon icon={faHeart} />
        </div>
    )
}

export default Button