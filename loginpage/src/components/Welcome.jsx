// import React from 'react'
import Styles from './Welcome.module.css';
import LoginFields from './LoginFields';
import PropTypes from 'prop-types';

export default function Welcome({ image }) {
  return (
    <>
      <div>
        <div className={Styles.main_container}>
          <div className={Styles.col}>
            {/* <div className={Styles.image_side}> */}
            <img src={image} alt="image"></img>
            {/* </div> */}
          </div>
          <div className={Styles.col}>
            <div className={Styles.content_side}>
              <div className={Styles.form}>
                <div className={Styles.heading1}>Hello,</div>
                <div className={Styles.heading2}>Welcome!</div>
                <LoginFields />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Welcome.propTypes = {
  image: PropTypes.string,
};
