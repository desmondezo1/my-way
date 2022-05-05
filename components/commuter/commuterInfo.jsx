import PropTypes from 'prop-types';
import Image from 'next/image';
import listItem from '../../styles/listItem.module.css'

export default function CommuterInfo({ commuter, src, text }) {
  return (
    <div>
      <p className={listItem.title}>{commuter}</p>
      <Image 
      src={src} 
      alt={text}
      className="align-straight"
      />
      <small className="pl-2 align-straight" style={{marginLeft: 10+"px"}}>{text}</small>
    </div>
  );
}

CommuterInfo.propTypes = {
  commuter: PropTypes.string,
  src: PropTypes.string,
  text: PropTypes.string
};
