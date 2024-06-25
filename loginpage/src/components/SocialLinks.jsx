import PropTypes from 'prop-types';
import Styles from './SocialLinks.module.css';

export default function SocialLinks(props) {
  return (
    <div>
      <a href={props.link}>
        <img className={Styles.SocialLinks} src={props.image} alt={props.alt} />
      </a>
    </div>
  );
}

SocialLinks.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  link: PropTypes.string
};
