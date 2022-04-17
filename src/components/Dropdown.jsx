import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export default function Dropdown({
  items,
  ariaLabel = 'select dropdown',
  firstOption = '',
  getFieldProps,
  onChange
}) {
  return (
    <select
      aria-label={ariaLabel}
      className="inline-block align-middle"
      {...getFieldProps}
    >
      <option value={firstOption}>{firstOption}</option>
      {items.map((item) => (
        <option value={item.value} key={uuidv4()}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

Dropdown.propTypes = {
  items: PropTypes.array,
  ariaLabel: PropTypes.string,
  firstOption: PropTypes.string,
  getFieldProps: PropTypes.any,
  onChange: PropTypes.func
};
