import PropTypes from "prop-types";
import './Button.css';

export default function Button(props) {
    return <button id="button-component">{props.text}</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}