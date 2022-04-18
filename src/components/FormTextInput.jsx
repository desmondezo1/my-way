import PropTypes from 'prop-types';

export default function FormTextInput({
  text,
  type = 'text',
  extraProps = {},
  getFieldProps,
  errorMsg,
  touched
}) {
  return (
    <div className="form-group">
      <span>{text}</span>
      <input type={type} {...extraProps} {...getFieldProps} />
      {touched && <small className="error">{errorMsg}</small>}
    </div>
  );
}

FormTextInput.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  extraProps: PropTypes.object,
  errorMsg: PropTypes.string,
  touched: PropTypes.bool,
  getFieldProps: PropTypes.any
};
