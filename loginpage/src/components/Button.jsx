import PropTypes from 'prop-types';
import Styles from "./Button.module.css"
import '../App.css'

export default function LoginButton({label, onClick}) {
  return (
    <div className={Styles.buttons}>
        <button className={Styles.button} onClick={onClick}>{label}</button>
    </div>
  )
}

LoginButton.propTypes = {
       label: PropTypes.string.isRequired,
       onClick:PropTypes.func.isRequired
}