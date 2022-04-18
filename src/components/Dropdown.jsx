import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export default function Dropdown({
  items,
  ariaLabel = 'select dropdown',
  firstOption = '',
  getFieldProps
}) {
  return (
    <select
      aria-label={ariaLabel}
      className="inline-block align-middle"
      {...getFieldProps}
    >
      <option value={firstOption}>{firstOption}</option>
      {items.map((item) => (
        <option value={item.state} key={uuidv4()}>
          {item.state}
        </option>
      ))}
    </select>
  );
}

Dropdown.propTypes = {
  items: PropTypes.array,
  ariaLabel: PropTypes.string,
  firstOption: PropTypes.string,
  getFieldProps: PropTypes.any
};
