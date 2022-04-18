import PropTypes from 'prop-types';

export default function CommuterInfo({ commuter, src, text }) {
  return (
    <div>
      <p>{commuter}</p>
      <img src={src} alt={text} className="align-straight" />
      <small className="pl-2 align-straight">{text}</small>
    </div>
  );
}

CommuterInfo.propTypes = {
  commuter: PropTypes.string,
  src: PropTypes.string,
  text: PropTypes.string
};
