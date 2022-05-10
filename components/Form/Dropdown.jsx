import PropTypes from 'prop-types';
import formStyle from '../../styles/form.module.css';

// import { v4 as uuidv4 } from 'uuid';

export default function Dropdown({
  items,
  ariaLabel = 'select dropdown',
  firstOption = '',
  getFieldProps
}) {
  return (
    <select
      aria-label={ariaLabel}
      className={formStyle.dropdown}
      {...getFieldProps}
      
    >
      <option className="fs-5" value={firstOption}>{firstOption}</option>
      {items.map((item, k) => {
        return <option className="fs-5" value={item} key={k}>{item}</option>
      })}
    </select>
  );
}

Dropdown.propTypes = {
  items: PropTypes.any,
  ariaLabel: PropTypes.string,
  firstOption: PropTypes.string,
  getFieldProps: PropTypes.any
};
