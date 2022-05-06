import PropTypes from 'prop-types';
import header from '../../styles/header.module.css'

export default function Logo({ logo = 'MyWay', isText = true, styles }) {
  return <>{isText ? <h1 className={header.logo}>{logo}</h1> : <img src={logo} {...styles} />}</>;
}

Logo.propTypes = {
  logo: PropTypes.any,
  isText: PropTypes.bool,
  styles: PropTypes.object
};

