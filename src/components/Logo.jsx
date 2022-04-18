import PropTypes from 'prop-types';

export default function Logo({ logo = 'MyWay', isText = true, styles }) {
  return <>{isText ? <h1>{logo}</h1> : <img src={logo} {...styles} />}</>;
}

Logo.propTypes = {
  logo: PropTypes.any,
  isText: PropTypes.bool,
  styles: PropTypes.object
};
