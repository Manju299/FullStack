// import PropTypes from 'prop-types';
import reactImage from '../assets/react.svg';
import Styles from './Home.module.css';

import Pastbin from './Pastbin';

export default function Home() {
  return (
    <>
      <div className={Styles.profileIImage}>
        <img src={reactImage} alt="profile" />
      </div>
      <div>
        <h2>Welcome to our site paste your link here</h2>
        <Pastbin />
      </div>
    </>
  );
}

// Home.propTypes = {
//     login: PropTypes.bool,
//     show: PropTypes.bool
// }
