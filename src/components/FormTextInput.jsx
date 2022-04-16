import PropTypes from 'prop-types';

export default function FormTextInput({
  text,
  type = 'text',
  value = '',
  extraProps = {}
}) {
  return (
    <div className="form-group">
      <span>{text}</span>
      <input type={type} value={value} {...extraProps} />
    </div>
  );
}

FormTextInput.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  extraProps: PropTypes.object
};
