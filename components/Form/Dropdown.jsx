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
      <option value={firstOption}>{firstOption}</option>
      {items.map((item) => {
       
        <option value={item} key="">
          {item}
        </option>

        console.log(item)
      })}
    </select>
  );
}

Dropdown.propTypes = {
  items: PropTypes.array,
  ariaLabel: PropTypes.string,
  firstOption: PropTypes.string,
  getFieldProps: PropTypes.any
};
